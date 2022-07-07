import React, { useContext } from 'react';
import { postsListContext } from '../Contexts/PostsListContext';
import SwitchThemeIcon from './SwitchThemeIcon';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import PopUpForm from './PopUpForm';
import SearchBar from './SearchBar';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

function Header() {
  const { setModalShow } = useContext(postsListContext);

  const success = function () {
    NotificationManager.success('You added A New Post', 'Success message');
  };
  function onShow() {
    setModalShow(true);
  }

  return (
    <div className="Header--Wrraper">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand id="header--title">
            <Link to={'/posts'} style={{ color: '#bb86fc' }}>
              Posts Blog
            </Link>{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link>
                <Link to={'/posts'}>Posts</Link>
              </Nav.Link>
              <Nav.Link onClick={() => onShow()}>+ Add Post</Nav.Link>
            </Nav>
            <SearchBar />
          </Navbar.Collapse>
          <div className="switch--Theme--Wrraper">
            <SwitchThemeIcon />
          </div>
        </Container>
      </Navbar>
      <PopUpForm show={() => onShow()} success={success} />
      <NotificationContainer />
    </div>
  );
}

export default Header;
