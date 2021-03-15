import React, { useContext } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { Context } from '../Context/ContextProvider';
import Memo from '../Component/Memo';
import MemoTextArea from '../Component/MemoTextArea';

const MemoContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 10px auto 0;
`;

function MemoContainer(): JSX.Element {
  const { memos } = useContext(Context);
  return (
    <MemoContainerWrapper>
      <MemoTextArea />
      {memos.map((memo, index) => (
        <Memo memo={memo} key={String(memo + index)} />
      ))}
    </MemoContainerWrapper>
  );
}

export default MemoContainer;
