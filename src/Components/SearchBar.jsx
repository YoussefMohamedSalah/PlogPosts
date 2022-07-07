import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchBar() {
  const [input, setInput] = useState('');
  const Navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    Navigate('/searched/' + input);
  };

  return (
    <div>
      <Form onSubmit={submitHandler} className="d-flex me-3">
        {' '}
        <Form.Control
          value={input}
          type="text"
          placeholder="Search"
          className="me-3"
          aria-label="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </Form>
    </div>
  );
}

export default SearchBar;
