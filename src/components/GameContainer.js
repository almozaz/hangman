import React, { PureComponent } from 'react'
import Title from './Title'

class GameContainer extends PureComponent {
  render() {
    return(
      <div className="game wrapper">
        <header>
          <Title content="Hangman" />
        </header>

        <main>
        </main>
      </div>
    )
  }
}

export default GameContainer
