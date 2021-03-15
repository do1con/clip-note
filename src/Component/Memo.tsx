import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

interface props {
  memo: string;
}

function Memo({ memo }: props): JSX.Element {
  return (
    <Card style={{ margin: '5px', width: 'calc(20% - 10px)' }}>
      <Card.Body>
        <Card.Text>{memo}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Memo;
