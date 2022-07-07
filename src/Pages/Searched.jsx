import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';
import { postsListContext } from '../Contexts/PostsListContext';
import img from '../images/11.jpg';
import moment from 'moment';

function Searched() {
  const { posts } = useContext(postsListContext);
  const { search } = useParams();

  const [searchedPost, setSearchedPost] = useState([]);

  const getSearched = function () {
    setSearchedPost(posts?.filter((post) => post?.title === search));
  };
  useEffect(() => {
    getSearched();
    console.log(search);
  }, [search]);

  return (
    <div>
      {searchedPost?.map((post) => {
        return (
          <DIVwrapper key={post?.id} className="Post--Info--Page">
            <Card style={{ width: '23rem' }}>
              <Card.Header style={{ color: 'blueviolet' }}>
                {post?.title}
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Created At :{' '}
                  {moment(post?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </ListGroup.Item>
                <ListGroup.Item>Post Id: {post?.id}</ListGroup.Item>
                <ListGroup.Item>{post?.body}</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '20rem' }} variant="top" src={img} />
            </Card>
          </DIVwrapper>
        );
      })}
    </div>
  );
}

const DIVwrapper = styled.div`
  background: #c59ceb6e;
  display: flex;
  padding: 5rem;
  margin: 0rem 8rem 0rem 9rem;
  border-radius: 5pc;
  justify-content: space-around;
`;

export default Searched;
