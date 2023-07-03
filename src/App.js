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
  state = {active: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  onClickButton = event => {
    this.setState({active: event.target.value})
  }

  renderButton = (buttonText, id) => {
    const {active} = this.state
    const classElement = active === id ? 'active-btn' : 'btn'
    return (
      <button
        type="button"
        onClick={this.onClickButton}
        value={id}
        className={classElement}
      >
        {buttonText}
      </button>
    )
  }

  render() {
    const {active} = this.state
    const activeObject = languageGreetingsList.filter(
      eachElement => eachElement.id === active,
    )
    const {imageUrl} = activeObject[0]
    const {imageAltText} = activeObject[0]

    return (
      <div className="container">
        <h1>Multilingual Greetings</h1>
        <ul className="btn-container">
          {languageGreetingsList.map(eachElement => (
            <li key={eachElement.id}>
              {this.renderButton(eachElement.buttonText, eachElement.id)}
            </li>
          ))}
        </ul>

        <img src={imageUrl} alt={imageAltText} className="image-element" />
      </div>
    )
  }
}

export default App
