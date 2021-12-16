import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import coursesNormalizer from '../schema/courses';
import { Map } from 'immutable';

const initialstate = Map([]);

export function reducer(state = initialstate, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const obj = action.data.map((course) => ({
        id: course.id,
        name: course.name,
        isSelected: false,
        credit: course.credit,
      }));
      const allCourses = coursesNormalizer(obj);
      return state.merge(allCourses);
    }
    case SELECT_COURSE: {
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        true
      );
    }
    case UNSELECT_COURSE: {
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        false
      );
    }
    default:
      return state;
  }
}
