import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

function Memo(): JSX.Element {
  return (
    <Card style={{ margin: '5px', width: 'calc(20% - 10px)' }}>
      <Card.Body>
        <Card.Text>
          테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용
          문서입니다.테스트용 문서입니다.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Memo;
