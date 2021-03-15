import React, { useRef } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const TextBoxWrapper = styled.div`
  margin: 5px;
  width: calc(20% - 10px);
`;

function MemoTextArea(): JSX.Element {
  const resizeTextArea = (textAreaRef: React.RefObject<HTMLTextAreaElement>) => {
    const textAreaRefDom = textAreaRef.current;
    if (textAreaRefDom) {
      textAreaRefDom.style.height = '1px';
      textAreaRefDom.style.height = `${textAreaRefDom.scrollHeight}px`;
    }
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
