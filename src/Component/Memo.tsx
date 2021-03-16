import React, { useState, useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Form } from 'react-bootstrap';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
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

const TextArea = styled.textarea`
  resize: none;
  display: block;
  overflow: hidden;
  width: 100%;
  padding: 20px;
`;

const ButtonWrapper = styled.div<{ rightPosition: number }>`
  width: 26px;
  height: 26px;
  background-color: #ffffff;
  position: absolute;
  top: -13px;
  right: ${(props) => props.rightPosition}px;
`;

const Button = styled.button`
  border: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0);
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
  const handleClickDelete = () => {
    contextDispatch({ type: 'DELETE/MEMO', deleteIndex: index });
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
      <ButtonWrapper rightPosition={13}>
        <Button type="button">
          <BsFillTrashFill style={{ width: '26px', color: 'red' }} onClick={handleClickDelete} />
        </Button>
      </ButtonWrapper>
      <ButtonWrapper rightPosition={44}>
        <Button type="button">
          <BsPencilSquare
            style={{
              width: '26px',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: editMode ? '#8dc542' : '#111111',
            }}
          />
        </Button>
      </ButtonWrapper>
    </TextBoxWrapper>
  );
}

export default Memo;
