export const IS_WINNER = 'IS_WINNER'

export default (guesses) => {
  return {
    type: IS_WINNER,
    payload: guesses,
  }
}
