import { handle } from 'redux-pack';

import * as actionTypes from './voteActionTypes';
import { synthesizeData } from './voteHelper';

const initialState = {
  questions: null,
  error: '',
  loading: false
};

const voteReducer = (state = initialState, action = '') => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_ALL_QUESTIONS: {
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          error: '',
          loading: true
        }),
        success: (prevState) => ({
          ...prevState,
          questions: synthesizeData([...payload])
        }),
        failure: (prevState) => ({
          ...prevState,
          error: 'Something went wrong. Please try again after some time.'
        }),
        finish: (prevState) => ({
          ...prevState,
          loading: false
        })
      });
    }

    default:
      return state;
  }
};

export default voteReducer;
