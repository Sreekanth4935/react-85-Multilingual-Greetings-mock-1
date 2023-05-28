import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {
    activeButtonId: languageGreetingsList[0].id,
  }

  changeActiveId = newId => {
    this.setState({
      activeButtonId: newId,
    })
  }

  render() {
    const {activeButtonId} = this.state
    const activeButtonDetails = languageGreetingsList.find(
      eachButton => activeButtonId === eachButton.id,
    )
    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <div className="greeting-container">
          <ul className="ul-container">
            {languageGreetingsList.map(eachLanguage => {
              const isActive = eachLanguage.id === activeButtonId
              const activeBackgroundColorCss = isActive
                ? 'active-button-background'
                : ''

              return (
                <li className="list-items" key={eachLanguage.id}>
                  <button
                    type="button"
                    onClick={() => this.changeActiveId(eachLanguage.id)}
                    className={`language-buttons ${activeBackgroundColorCss} `}
                  >
                    {eachLanguage.buttonText}
                  </button>
                </li>
              )
            })}
          </ul>
          <div>
            <img
              src={activeButtonDetails.imageUrl}
              alt={activeButtonDetails.imageAltText}
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App
