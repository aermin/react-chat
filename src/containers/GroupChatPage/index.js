import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import {
  updateHomePageListAction,
  deleteHomePageListAction,
  updateListGroupNameAction,
} from '../HomePageList/homePageListAction';
import {
  addGroupMessagesAction,
  deleteGroupChatAction,
  addGroupInfoAction,
  addGroupMessageAndInfoAction,
  updateGroupTitleNoticeAction,
} from './groupChatAction';
import GroupChat from '../../components/GroupChat';

const mapStateToProps = state => ({
  allGroupChats: state.allGroupChatsState,
  homePageList: state.homePageListState,
  relatedCurrentChat: state.relatedCurrentChat,
  inviteDate: state.inviteState,
});

const mapDispatchToProps = dispatch => ({
  addGroupMessageAndInfo(arg = {}) {
    dispatch(addGroupMessageAndInfoAction({ ...arg }));
  },
  addGroupMessages(arg = {}) {
    dispatch(addGroupMessagesAction({ ...arg }));
  },
  deleteGroupChat(arg = {}) {
    dispatch(deleteGroupChatAction({ ...arg }));
  },
  addGroupInfo(arg = {}) {
    dispatch(addGroupInfoAction({ ...arg }));
  },
  updateHomePageList(arg = {}) {
    dispatch(updateHomePageListAction({ ...arg }));
  },
  deleteHomePageList(arg = {}) {
    dispatch(deleteHomePageListAction({ ...arg }));
  },
  updateGroupTitleNotice(arg = {}) {
    dispatch(updateGroupTitleNoticeAction({ ...arg }));
  },
  updateListGroupName(arg = {}) {
    dispatch(updateListGroupNameAction({ ...arg }));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupChat));
