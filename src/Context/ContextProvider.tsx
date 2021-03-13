import React, { useReducer } from 'react';

type ClipNoteStates = {
  memos: Array<{
    index: number;
    content: string;
  }>;
};

const initialState: ClipNoteStates = {
  memos: [
    {
      index: 1,
      content:
        '테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    },
    {
      index: 2,
      content:
        '테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    },
    {
      index: 3,
      content:
        '테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    },
    {
      index: 4,
      content:
        '테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    },
    {
      index: 5,
      content:
        '테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    },
    {
      index: 6,
      content:
        '테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.테스트용 문서입니다.',
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const Context = React.createContext(initialState);

const reducer = (state = initialState, action: any): ClipNoteStates => {
  switch (action.type) {
    case 'ADD/MEMO':
      state.memos.unshift(action.value);
      return state;
    default:
      throw new Error();
  }
};

export default function ContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, contextDispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
}
