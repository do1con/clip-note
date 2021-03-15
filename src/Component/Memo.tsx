import React, { useState, useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Form } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { Context } from '../Context/ContextProvider';

interface props {
  memo: string;
  index: number;
}

const TextBoxWrapper = styled.div`
  margin: 5px;
  width: calc(20% - 10px);
`;

const TextArea = styled.textarea`
  resize: none;
  display: block;
  overflow: hidden;
  width: 100%;
  padding: 10px;
`;

function Memo({ memo, index }: props): JSX.Element {
  const [editMode, setEditMode] = useState(false);
  const { contextDispatch } = useContext(Context);
  const handleDoubleClickMemo = () => {
    setEditMode(true);
  };
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
    if (textAreaRef) contextDispatch({ type: 'EDIT/MEMO', value: textAreaRef?.current?.value, index });
  };
  return (
    <TextBoxWrapper>
      <TextArea
        ref={textAreaRef}
        defaultValue={memo}
        readOnly={!editMode}
        onBlur={handleAddMemo}
        onDoubleClick={handleDoubleClickMemo}
      />
    </TextBoxWrapper>
  );
}

export default Memo;
