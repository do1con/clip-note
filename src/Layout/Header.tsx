import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '../Context/ContextProvider';

const H1 = styled.h1`
  background: linear-gradient(45deg, rgba(141, 197, 66, 1) 0%, rgba(195, 140, 206, 1) 87%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-size: 35px;
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const ButtonWrapper = styled.div`
  width: 110px;
  height: 26px;
`;
const Button = styled.button`
  border: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0);
  font-size: 14px;
  font-weight: 600;
  color: pink;
  &:hover {
    color: red;
  }
`;
function Header(): JSX.Element {
  const { contextDispatch } = useContext(Context);
  const handleOnClickRemoveAll = () => {
    // eslint-disable-next-line no-restricted-globals
    const checkForSure = confirm('Are You sure?');
    if (checkForSure) contextDispatch({ type: 'DELETEALL/MEMO' });
  };
  useEffect(() => {
    chrome.storage.sync.get(['memos'], function (result) {
      contextDispatch({ type: 'GETSTOREDMEMO/MEMO', value: result.memos });
    });
  }, []);
  return (
    <Container fluid>
      <Row style={{ justifyContent: 'space-between' }}>
        <Col lg="auto">
          <H1>Clip Note</H1>
        </Col>
        <Col lg="auto">
          <ButtonWrapper>
            <Button type="button" onClick={handleOnClickRemoveAll}>
              Delete all notes
            </Button>
          </ButtonWrapper>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
