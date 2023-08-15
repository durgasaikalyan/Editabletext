import {Component} from 'react' // Don't forget to import React

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  Paragraph,
  Input,
  Button,
} from '../styledComponents'

class TextInput extends Component {
  state = {userInput: '', isButtonClicked: false}

  onchangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {userInput, isButtonClicked} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <Paragraph>{userInput}</Paragraph>
            ) : (
              <Input
                type="text"
                onChange={this.onchangeInput}
                value={userInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>
        </CardContainer>
        {isButtonClicked && ( // Conditionally render the input when "Edit" button is clicked
          <InputContainer>
            <Input
              type="text"
              onChange={this.onchangeInput}
              value={userInput}
            />
          </InputContainer>
        )}
      </AppContainer>
    )
  }
}

export default TextInput
