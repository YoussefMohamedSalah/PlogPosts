import React, { useContext, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import img from '../images/11.jpg';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { postsListContext } from '../Contexts/PostsListContext';
import styled from 'styled-components';
import CommentsForm from '../Components/CommentsForm';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

function PostsList() {
  const { posts, users } = useContext(postsListContext);
  const [comment, setComment] = useState(false);
  const [cardId, setCardId] = useState('');

  const getCardId = function (postId) {
    setCardId(postId);
    console.log(postId);
  };


  // const addComment = async (values) => {
  //   try {
  //     // Post Method
  //     const API = axios.create({ baseURL: ' https://api.tawwr.com' });
  //     const sendComment = await API.post('/posts/' + cardId, values);
  //     setComment(sendComment);
  //     console.log(cardId + values);
  //   } catch (error) {
  //     console.log('404! Page Not Found');
  //   }
  // };

  // console.log(posts);
  const formik = useFormik({
    initialValues: {
      comment: '',
      userId: '',
    },
    onSubmit: (values) => {
      // addComment(values);
      console.log(values);
    },
  });

  return (
    <>
      <DIV className="Cards--Wrraper">
        {posts.map((post) => {
          return (
            <Card className="Card" key={post.id} style={{ width: '25rem' }}>
              <Card.Img variant="top" src={img} style={{ height: '13rem' }} />
              <Card.Body className="Card--Holder">
                <Card.Title>
                  {users.map((user) => user.id === post.userId && user.name)}
                </Card.Title>
                <div>{moment(post.createdAt).format(' h:m a')}</div>
                <Card.Text>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Text>
                <DIVFLEX>
                  <Link to={'/post/' + post.id}>
                    <Button variant="outline-secondary">See More</Button>
                  </Link>
                </DIVFLEX>
                {/* 0------------------- */}
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Add Comment</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type Comment..."
                      name="comment"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.comment}
                    />
                  </Form.Group>
                  <Button
                    style={{ marginLeft: '7.5rem' }}
                    variant="primary"
                    type="submit"
                    onClick={() => getCardId(post.id)}>
                    Add Comment
                  </Button>
                </Form>
                {/* 0------------------- */}
              </Card.Body>
            </Card>
          );
        })}
      </DIV>
    </>
  );
}
const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
const DIVFLEX = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default PostsList;
