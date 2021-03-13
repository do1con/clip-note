/* global chrome */
import React, { useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { Context } from '../Context/ContextProvider';
import Memo from '../Component/Memo';

const TextBoxWrapper = styled.div`
  margin: 5px;
  width: calc(20% - 10px);
`;

const MemoContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 10px auto 0;
`;

function MemoContainer(): JSX.Element {
  const { memos } = useContext(Context);
  useEffect(() => {
    console.log(memos);
  });
  const resizeTextArea = (textAreaRef: React.RefObject<HTMLTextAreaElement>) => {
    const textAreaRefDom = textAreaRef.current;
    if (textAreaRefDom) {
      textAreaRefDom.style.height = '1px';
      textAreaRefDom.style.height = `${textAreaRefDom.scrollHeight}px`;
    }
  };

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <MemoContainerWrapper>
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
      <Memo />
      <Memo />
      <Memo />
      <Memo />
      <Memo />
      <Memo />
      <Memo />
      <Memo />
      <Memo />
      <Memo />
    </MemoContainerWrapper>
  );
}

export default MemoContainer;
