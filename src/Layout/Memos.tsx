/* global chrome */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form } from 'react-bootstrap';

const TextBoxWrapper = styled.div`
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

function Memos(): JSX.Element {
  const resizeTextArea = (textAreaRef: React.RefObject<HTMLTextAreaElement>) => {
    const textAreaRefDom = textAreaRef.current;
    if (textAreaRefDom) {
      textAreaRefDom.style.height = '1px';
      textAreaRefDom.style.height = `${textAreaRefDom.scrollHeight}px`;
    }
  };

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  chrome.storage.sync.get(['key'], function storageSyncCallback(result) {
    // Chrome Storage Sync get, callback func
    console.log(`Value currently is ${result.key}`);
  });
  return (
    <Container fluid>
      <Row>
        <Col lg="auto">
          <TextBoxWrapper>
            <Form>
              <Form.Group controlId="memoTextForm">
                <Form.Control
                  as="textarea"
                  placeholder="Type here."
                  ref={textAreaRef}
                  onKeyDown={() => resizeTextArea(textAreaRef)}
                  onKeyUp={() => resizeTextArea(textAreaRef)}
                  style={{
                    overflow: 'hidden',
                    transition: 'height 200ms',
                  }}
                />
              </Form.Group>
            </Form>
          </TextBoxWrapper>
        </Col>
      </Row>
    </Container>
  );
}

export default Memos;
