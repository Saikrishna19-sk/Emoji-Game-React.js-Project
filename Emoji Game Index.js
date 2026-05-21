import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    score: 0,
    topScore: 0,
    isGameOver: false,
    isWon: false,
  }

  shuffleEmojisList = () => {
    const {emojisList} = this.props

    return [...emojisList].sort(() => Math.random() - 0.5)
  }

  clickedEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList, score, topScore} = this.state

    const isClicked = clickedEmojisList.includes(id)

    if (isClicked) {
      this.setState({
        isGameOver: true,
        topScore: Math.max(score, topScore),
      })
    } else {
      const newScore = score + 1

      if (newScore === emojisList.length) {
        this.setState({
          clickedEmojisList: [...clickedEmojisList, id],
          score: newScore,
          topScore: Math.max(newScore, topScore),
          isWon: true,
          isGameOver: true,
        })
      } else {
        this.setState(prevState => ({
          clickedEmojisList: [...prevState.clickedEmojisList, id],
          score: prevState.score + 1,
        }))
      }
    }
  }

  playAgain = () => {
    this.setState({
      clickedEmojisList: [],
      score: 0,
      isGameOver: false,
      isWon: false,
    })
  }

  renderEmojisList = () => {
    const shuffledList = this.shuffleEmojisList()

    return (
      <ul className="emoji-list">
        {shuffledList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickedEmoji={this.clickedEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameOver, isWon} = this.state

    return (
      <div className="app-container">
        {!isGameOver && <NavBar score={score} topScore={topScore} />}

        <div className="body-container">
          {isGameOver ? (
            <WinOrLoseCard
              isWon={isWon}
              score={score}
              playAgain={this.playAgain}
            />
          ) : (
            this.renderEmojisList()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
