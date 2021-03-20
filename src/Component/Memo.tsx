import React, { useState, useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
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

const TextArea = styled.textarea<{ editMode: boolean }>`
  resize: none;
  display: block;
  overflow: hidden;
  width: 100%;
  padding: 20px;
  border: ${(props) => (props.editMode ? '1px solid #343434' : '1px solid #ced4da')};
  color: ${(props) => (props.editMode ? '#121212' : '#656565')};
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
  const [hoverDeleteBtn, setHoverDeleteBtn] = useState(false);
  const [hoverEditBtn, setHoverEditBtn] = useState(false);
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
  const handleDoubleClickMemo = () => {
    setEditMode(true);
    return textAreaRef.current?.focus();
  };
  const handleAddMemo = () => {
    setEditMode(false);
    contextDispatch({ type: 'EDIT/MEMO', value: textAreaRef?.current?.value, index });
  };
  const handleOnChangeMemo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(event.target.value);
  };
  const handleClickDelete = () => {
    contextDispatch({ type: 'DELETE/MEMO', deleteIndex: index });
  };
  const handleClickEdit = () => {
    setEditMode(true);
    return textAreaRef.current?.focus();
  };
  const handleMouseOverDeleteBtn = () => {
    setHoverDeleteBtn(true);
  };
  const handleMouseLeaveDeleteBtn = () => {
    setHoverDeleteBtn(false);
  };
  const handleMouseOverEditBtn = () => {
    setHoverEditBtn(true);
  };
  const handleMouseLeaveEditBtn = () => {
    setHoverEditBtn(false);
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
        onChange={handleOnChangeMemo}
      />
      <ButtonWrapper rightPosition={13}>
        <Button type="button" onClick={handleClickDelete}>
          <BsFillTrashFill
            style={{ width: '26px', color: hoverDeleteBtn ? 'red' : 'pink' }}
            onMouseOver={handleMouseOverDeleteBtn}
            onMouseLeave={handleMouseLeaveDeleteBtn}
          />
        </Button>
      </ButtonWrapper>
      <ButtonWrapper rightPosition={44}>
        <Button type="button" onClick={handleClickEdit}>
          <BsPencilSquare
            style={{
              width: '26px',
              color: editMode || hoverEditBtn ? 'blue' : 'skyblue',
            }}
            onMouseOver={handleMouseOverEditBtn}
            onMouseLeave={handleMouseLeaveEditBtn}
          />
        </Button>
      </ButtonWrapper>
    </TextBoxWrapper>
  );
}

export default Memo;
