//import { merge } from 'ramda';

import {
    DEFAULT
} from '../constants/actionTypes';


const testing = (state = {}, action) => {
  switch (action.type) {
    case DEFAULT:
      return state;
    default:
      return state;
  }
};

export default testing;
