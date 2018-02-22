import { createAction, handleActions } from 'redux-actions';
import { Record, List, fromJS, type Map } from 'immutable';

// action types
const INITIALIZE_CONTENTS = 'contents/INITIALIZE_CONTENTS';
const SHOW_DIALOG = 'contents/SHOW_DIALOG'
const HIDE_DIALOG = 'contents/HIDE_DIALOG'
const SET_NOT_TODO_LIST = 'contents/SET_NOT_TODO_LIST';
const ADD_NOT_TODO_LIST = 'contents/ADD_NOT_TODO_LIST';

export type ContentsActionCreators = {
  initializeContents(): any,
  showDialog(): any,
  hideDialog(): any,
  setNotTodoList(findResult: List): any,
  addNotTodoList(newNotTodo: object): any
};

export const actionCreators = {
  initializeContents: createAction(INITIALIZE_CONTENTS),
  showDialog: createAction(SHOW_DIALOG),
  hideDialog: createAction(HIDE_DIALOG),
  setNotTodoList: createAction(SET_NOT_TODO_LIST),
  addNotTodoList: createAction(ADD_NOT_TODO_LIST)
};

export type Contents = {
  open: boolean,
  notTodoList: ?List
};

const ContentsRecord = Record({
  open: false,
  notTodoList: null
});

const initialState: Map<string, *> = ContentsRecord();

export default handleActions({
  [INITIALIZE_CONTENTS]: state => initialState,
  [SHOW_DIALOG]: state => state.set('open', true),
  [HIDE_DIALOG]: state => state.set('open', false),
  [SET_NOT_TODO_LIST]: (state, { payload: findResult }) => state.set('notTodoList', fromJS(findResult)),
  [ADD_NOT_TODO_LIST]: (state, { payload: newNotTodo }) => state.set('notTodoList', state.get('notTodoList').concat(fromJS(newNotTodo)))
}, initialState);