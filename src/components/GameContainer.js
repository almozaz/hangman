import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import NewGameButton from './newGameButton'
import Input from './Input'
import GameProgress from './GameProgress'

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
          <GameProgress />
        </main>
      </div>
    )
  }
}

export default connect()(GameContainer)
