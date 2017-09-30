import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import NewGameButton from './newGameButton'
import Input from './Input'

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
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ wordBank }) => ({
  wordBank
})

export default connect(mapStateToProps)(GameContainer)
