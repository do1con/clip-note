import React, { useReducer } from 'react';

type ClipNoteStates = {
  memos: Array<string>;
};

const initialState: ClipNoteStates = {
  memos: [
    '1테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    '2테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    '3테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    '4테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    '5테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    '6테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const Context = React.createContext(initialState);

const reducer = (state = initialState, action: any): ClipNoteStates => {
  const copiedState = state;
  switch (action.type) {
    case 'ADD/MEMO':
      copiedState.memos.unshift(action.value);
      return copiedState;
    default:
      throw new Error();
  }
};

export default function ContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, contextDispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
}
