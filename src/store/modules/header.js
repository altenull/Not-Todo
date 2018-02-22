import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const INITIALIZE_HEADER = 'header/INITIALIZE_HEADER';
const LAZE_DRAWER = 'header/LAZE_DRAWER';
const SHOW_DRAWER = 'header/SHOW_DRAWER';
const HIDE_DRAWER = 'header/HIDE_DRAWER';
const REVERSE_DRAWER = 'header/REVERSE_DRAWER';
const SET_DRAWER = 'header/SET_DRAWER';

export type HeaderActionCreators = {
  initializeHeader(): any,
  lazeDrawer(): any,
  showDrawer(): any,
  hideDrawer(): any,
  reverseDrawer(): any,
  setDrawer(open: boolean): any
};

export const actionCreators = {
  initializeHeader: createAction(INITIALIZE_HEADER),
  lazeDrawer: createAction(LAZE_DRAWER),
  showDrawer: createAction(SHOW_DRAWER),
  hideDrawer: createAction(HIDE_DRAWER),
  reverseDrawer: createAction(REVERSE_DRAWER),
  setDrawer: createAction(SET_DRAWER)
};

export type Header = {
  drawer: boolean,
  open: boolean
};

const HeaderRecord = Record({
  drawer: false,
  open: false
});

const initialState: Map<string, *> = HeaderRecord();

export default handleActions({
  [INITIALIZE_HEADER]: state => initialState,
  [LAZE_DRAWER]: state => state.set('drawer', true),
  [SHOW_DRAWER]: state => state.set('open', true),
  [HIDE_DRAWER]: state => state.set('open', false),
  [REVERSE_DRAWER]: state => state.set('open', !state.open),
  [SET_DRAWER]: (state, { payload: open }) => state.set('open', open)
}, initialState);