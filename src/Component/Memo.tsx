import React, { useState, useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Form } from 'react-bootstrap';
import { Context } from '../Context/ContextProvider';

interface propType {
  memo: string;
  index: number;
}

const TextBoxWrapper = styled.div`
  margin: 10px;
  width: calc(20% - 20px);
  position: relative;
`;

const TextArea = styled.textarea<{ editMode: boolean }>`
  resize: none;
  display: block;
  overflow: hidden;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => (props.editMode ? '#f1f1f1;' : '#ffffff;')};
  caret-color: linear-gradient(45deg, rgba(141, 197, 66, 1) 0%, rgba(195, 140, 206, 1) 87%);
`;

const ButtonWrapper = styled.div<{ rightPosition: number }>`
  width: 26px;
  height: 26px;
  background-color: red;
  position: absolute;
  top: -13px;
  right: ${(props) => props.rightPosition}px;
`;

function Memo({ memo, index }: propType): JSX.Element {
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
    setEditMode(false);
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
        editMode={editMode}
      />
      <ButtonWrapper rightPosition={13}>수정</ButtonWrapper>
      <ButtonWrapper rightPosition={44}>삭제</ButtonWrapper>
    </TextBoxWrapper>
  );
}

export default Memo;
