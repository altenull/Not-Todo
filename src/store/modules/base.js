import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const INITIALIZE_BASE = 'base/INITIALIZE_BASE';

export type BaseActionCreators = {
  initializeBase(): any
};

export const actionCreators = {
  initializeBase: createAction(INITIALIZE_BASE)
};

export type Base = {
  open: boolean,
  drawer: boolean
};

const BaseRecord = Record({
  open: false,
  drawer: false
});

const initialState: Map<string, *> = BaseRecord();

export default handleActions({
  [INITIALIZE_BASE]: state => initialState
}, initialState);