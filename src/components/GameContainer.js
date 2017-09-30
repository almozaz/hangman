import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import NewGameButton from './newGameButton'

class GameContainer extends PureComponent {

  render() {
    return(
      <div className="game wrapper">
        <header>
          <Title content="Hangman" />
        </header>
        <main>
          <NewGameButton />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ wordBank }) => ({
  wordBank
})

export default connect(mapStateToProps)(GameContainer)
