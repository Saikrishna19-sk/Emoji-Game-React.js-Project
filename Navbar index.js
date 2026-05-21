
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="game-title">Emoji Game</h1>
      </div>

      <div className="scores-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar

#index.css
.nav-container {
  background-color: #ffffff33;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  margin-right: 10px;
}

.game-title {
  color: #ffffff;
  font-size: 24px;
  margin: 0;
}

.scores-container {
  display: flex;
  align-items: center;
}

.score {
  color: #ffffff;
  font-size: 20px;
  margin-left: 20px;
}
