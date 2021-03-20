import React, { useReducer } from 'react';

type ClipNoteStates = {
  memos: Array<string>;
  contextDispatch?: any;
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
  switch (action.type) {
    case 'ADD/MEMO':
      if (action.value) {
        return {
          ...state,
          memos: [action.value, ...state.memos],
        };
      }
      return {
        ...state,
      };
    case 'EDIT/MEMO':
      return {
        ...state,
        memos: state.memos.map((memo, index) => {
          if (index === action.index) {
            return action.value;
          }
          return memo;
        }),
      };
    case 'DELETE/MEMO':
      return {
        ...state,
        memos: state.memos.filter((memo, index) => index !== action.deleteIndex),
      };
    default:
      throw new Error();
  }
};

export default function ContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, contextDispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ memos: state.memos, contextDispatch }}>{children}</Context.Provider>;
}
