import { which } from '../lib/global/global'

const initialState = {
  counter: 0,
}

const types = {
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
};

const reducer = (state = initialState, action) => {
  which(action.type, {
    'INCREMENT_COUNTER': { ...state, ...{counter: state.counter + 1} },
  }, ()=>{
    throw new Error("Unexpected action");
  });
};

export { initialState, types, reducer };