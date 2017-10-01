import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ResultDisplay extends PureComponent {
  static propTypes = {
    isWinner: PropTypes.bool
  }

  render() {
    const { isWinner } = this.props

    if (isWinner === null) return null

    if (!isWinner) return (
      <div className="gameOver">
        <p>'Oh, no. Want to try again?'</p>
      </div>
    )

    if (isWinner) return (
      <div className="winner">
        <p>'Yay!!! You won!!'</p>
      </div>
    )
  }
}

const mapStateToProps = ( { isWinner } ) => {
  return {
    isWinner
  }
}

export default connect(mapStateToProps)(ResultDisplay)
