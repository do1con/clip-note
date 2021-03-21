import React, { useRef, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../Context/ContextProvider';

const TextBoxWrapper = styled.div`
  margin: 10px;
  width: calc(20% - 20px);
  position: relative;
  @media (max-width: 1024px) {
    width: calc(25% - 20px);
  }
  @media (max-width: 840px) {
    width: calc(33% - 20px);
  }
  @media (max-width: 630px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;
const TextArea = styled.textarea`
  resize: none;
  display: block;
  overflow: hidden;
  width: 100%;
  padding: 20px;
`;

function MemoTextArea(): JSX.Element {
  const { contextDispatch } = useContext(Context);
  const [currentValue, setCurrentValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      const { scrollHeight } = textAreaRef.current;
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [currentValue]);
  const handleAddMemo = () => {
    contextDispatch({ type: 'ADD/MEMO', value: textAreaRef.current?.value });
    setCurrentValue('');
  };
  const handleOnChangeMemo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(event.target.value);
  };
  return (
    <TextBoxWrapper>
      <TextArea
        ref={textAreaRef}
        onChange={handleOnChangeMemo}
        onBlur={handleAddMemo}
        placeholder="Type here..."
        value={currentValue}
      />
    </TextBoxWrapper>
  );
}

export default MemoTextArea;
