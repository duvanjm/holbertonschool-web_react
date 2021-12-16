import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes";

const initialState = {
  filter: "DEFAULT",
  notifications: [],
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          id: notification.id,
          isRead: false,
          type: notification.type,
          value: notification.value,
        })),
      };
    }
    case MARK_AS_READ: {
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          if (notification.id === action.index) {
            return {
              ...notification,
              isRead: true,
            };
          } else return { ...notification };
        }),
      };
    }
    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }
    default:
      return state;
  }
}
