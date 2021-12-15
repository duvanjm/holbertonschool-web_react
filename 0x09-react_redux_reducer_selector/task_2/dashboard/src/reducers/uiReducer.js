import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialstate =  Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

export function uiReducer(state = initialstate, action) {
  switch (action) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      return {...state, isNotificationDrawerVisible: true};
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return {...state, isNotificationDrawerVisible: false};
    }
    case LOGIN_SUCCESS: {
      return {...state, isUserLoggedIn: true};
    }
    case LOGIN_FAILURE: {
      return {...state, isUserLoggedIn: false};
    }
    case LOGOUT: {
      return {...state, isUserLoggedIn: false};
    }
    default:
      return state;
  }
}
