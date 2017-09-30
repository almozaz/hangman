import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import guessLetter from '../actions/guessLetter'

class Input extends PureComponent {
constructor(props) {
    super()

    const guess = props

    this.state = guess
  }

  updateGuess(event) {
    if (event.keyCode === 13) {
      this.saveGuess()
    }
  }

  saveGuess() {
      const guess = this.refs.guess.value
      this.props.save(guess)
      this.refs.guess.value = null
    }

  render() {
    return(
      <div className="editor">
        <input
          type="text"
          ref="guess"
          className="guess"
          placeholder="Guess a letter"
          maxLength="1"
          defaultValue={this.state.guess}
          onChange={this.updateGuess.bind(this)}
          onKeyDown={this.updateGuess.bind(this)}/>

          <div className="actions">
            <button className="primary" type="submit" onClick={this.saveGuess.bind(this)}>Guess</button>
          </div>
      </div>
    )
  }
}


const mapDispatchToProps = { save: guessLetter }

export default connect(null, mapDispatchToProps)(Input)
