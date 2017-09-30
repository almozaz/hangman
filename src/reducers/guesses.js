import { GUESS_LETTER } from '../actions/guessLetter'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
      return state.concat(payload);
    default :
      return state
  }
}
