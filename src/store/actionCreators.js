import { bindActionCreators } from 'redux';
import store from './index';
import { actionCreators as headerActions, type HeaderActionCreators } from './modules/header';
import { actionCreators as contentsActions, type ContentsActionCreators } from './modules/contents';

const { dispatch } = store;
export const HeaderActions: HeaderActionCreators = bindActionCreators(headerActions, dispatch);
export const ContentsActions: ContentsActionCreators = bindActionCreators(contentsActions, dispatch);