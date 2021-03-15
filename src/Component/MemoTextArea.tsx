import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { Context } from '../Context/ContextProvider';

const TextBoxWrapper = styled.div`
  margin: 5px;
  width: calc(20% - 10px);
`;

function MemoTextArea(): JSX.Element {
  const { memos, contextDispatch } = useContext(Context);
  const resizeTextArea = (textAreaRef: React.RefObject<HTMLTextAreaElement>) => {
    const textAreaRefDom = textAreaRef.current;
    if (textAreaRefDom) {
      textAreaRefDom.style.height = '1px';
      textAreaRefDom.style.height = `${textAreaRefDom.scrollHeight}px`;
    }
  };
  const addMemo = () => {
    contextDispatch({ type: 'ADD/MEMO', value: '하하하' });
  };

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <TextBoxWrapper>
      <Form>
        <Form.Group controlId="memoTextForm">
          <Form.Control
            as="textarea"
            placeholder="Type here."
            ref={textAreaRef}
            onKeyDown={() => resizeTextArea(textAreaRef)}
            onKeyUp={() => resizeTextArea(textAreaRef)}
            onBlur={addMemo}
            style={{
              overflow: 'hidden',
              transition: 'height 200ms',
            }}
          />
        </Form.Group>
      </Form>
    </TextBoxWrapper>
  );
}

export default MemoTextArea;
