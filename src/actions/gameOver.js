export const GAME_OVER = 'GAME_OVER'

export default (guesses) => {
  return {
    type: GAME_OVER,
    payload: guesses,
  }
}
