import React, { Component } from 'react'
import classNames from 'classnames';
import styles from './UpdateStep.module.css'

export default class UpdateStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newStep: null,
    }
    this.basicStepValue = 1;
  }

  handleForm = (event) => {
    event.preventDefault();
    this.props.setStep(this.state.newStep || this.basicStepValue);
    this.setState({ newStep: null });
  }
  handleInput = ({ target: { name, value } }) => this.setState({ [name]: Number(value) || this.basicStepValue });
  handleClearInput = () => this.inputField.value = '';

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <input
          type="text"
          onChange={this.handleInput}
          name="newStep"
          value={this.state.newStep}
          placeholder="Enter new step"
          ref={input => this.inputField = input}
          onFocus={this.handleClearInput}
          className={styles.inputStep}
        ></input>
        <input
          type="submit"
          value="Set value"
          className={classNames('button', styles.submit)}
        ></input>
      </form>
    )
  }
}
