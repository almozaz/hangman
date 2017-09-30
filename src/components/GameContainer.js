import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import NewGameButton from './newGameButton'
import Input from './Input'
import Guesses from './Guesses'

class GameContainer extends PureComponent {

  render() {
    return(
      <div className="game wrapper">
        <header>
          <Title content="Hangman" />
        </header>
        <main>
          <NewGameButton />
          <Input />
          <Guesses />
        </main>
      </div>
    )
  }
}

export default connect()(GameContainer)
