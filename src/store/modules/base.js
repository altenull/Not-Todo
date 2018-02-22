import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const INITIALIZE_BASE = 'base/INITIALIZE_BASE';
const LAZE_DRAWER = 'base/LAZE_DRAWER';
const SHOW_DRAWER = 'base/SHOW_DRAWER';
const HIDE_DRAWER = 'base/HIDE_DRAWER';
const REVERSE_DRAWER = 'base/REVERSE_DRAWER';
const SET_DRAWER = 'base/SET_DRAWER';

export type BaseActionCreators = {
  initializeBase(): any,
  lazeDrawer(): any,
  showDrawer(): any,
  hideDrawer(): any,
  reverseDrawer(): any,
  setDrawer(open: boolean): any
};

export const actionCreators = {
  initializeBase: createAction(INITIALIZE_BASE),
  lazeDrawer: createAction(LAZE_DRAWER),
  showDrawer: createAction(SHOW_DRAWER),
  hideDrawer: createAction(HIDE_DRAWER),
  reverseDrawer: createAction(REVERSE_DRAWER),
  setDrawer: createAction(SET_DRAWER)
};

export type Base = {
  drawer: boolean,
  open: boolean
};

const BaseRecord = Record({
  drawer: false,
  open: false
});

const initialState: Map<string, *> = BaseRecord();

export default handleActions({
  [INITIALIZE_BASE]: state => initialState,
  [LAZE_DRAWER]: state => state.set('drawer', true),
  [SHOW_DRAWER]: state => state.set('open', true),
  [HIDE_DRAWER]: state => state.set('open', false),
  [REVERSE_DRAWER]: state => state.set('open', !state.open),
  [SET_DRAWER]: (state, { payload: open }) => state.set('open', open)
}, initialState);