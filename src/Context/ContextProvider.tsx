import React, { useReducer } from 'react';

type ClipNoteStates = {
  memos: Array<string>;
  contextDispatch?: any;
  length?: any;
};

const initialState: ClipNoteStates = {
  memos: [
    `README.txt
1. Clip Note is developed by Kim Seongsoo. kss7547@gmail.com
2. Your memos will stored in Google Account. If You want further infomations, check on https://support.google.com/chrome/answer/165139?co=GENIE.Platform%3DDesktop&hl=en
3. Clip Note does not fully guarantee your notes. It just saves your notes to your Google Account.
So, if it's really important information, ex) bank account password, bitcoin account information, etc.
It is recommended not to save to Clip Note.`,
    `HOW TO USE Clip Note
1. write on 'Type here...' section. if You click other area, it will save it automatically.
2. You can edit, or delete your clip. to edit, click on pencil icon, or double click on clip.
to delete, click trash can icon.`,
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const Context = React.createContext(initialState);

const reducer = (state = initialState, action: any): ClipNoteStates => {
  switch (action.type) {
    case 'GETSTOREDMEMO/MEMO':
      if (!action.value) {
        return {
          ...state,
        };
      }
      if (action.value && action.value.length >= 1) {
        return { memos: action.value.reverse() };
      }
      return {
        ...state,
      };
    case 'ADD/MEMO':
      if (action.value) {
        chrome.storage.sync.get('memos', function (result) {
          const { memos } = result;
          if (Array.isArray(memos) && memos.length >= 1) {
            memos.push(action.value);
            chrome.storage.sync.set({ memos });
            return;
          }
          chrome.storage.sync.set({ memos: [action.value] });
        });
      }
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
      chrome.storage.sync.get('memos', function (result) {
        const { memos } = result;
        chrome.storage.sync.set({
          memos: memos.map((memo: string, index: number) => {
            if (index === action.index) {
              return action.value;
            }
            return memo;
          }),
        });
      });
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
      chrome.storage.sync.get('memos', function (result) {
        const { memos } = result;
        chrome.storage.sync.set({ memos: memos.filter((memo: string, index: number) => index !== action.deleteIndex) });
      });
      return {
        ...state,
        memos: state.memos.filter((memo, index) => index !== action.deleteIndex),
      };
    case 'DELETEALL/MEMO':
      chrome.storage.sync.set({ memos: [] });
      return {
        memos: [],
      };
    default:
      throw new Error();
  }
};

export default function ContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, contextDispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ memos: state.memos, contextDispatch }}>{children}</Context.Provider>;
}
