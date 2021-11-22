import classNames from 'classnames';
import React, { Component } from 'react'
import styles from './CounterСontrol.module.css'

export default class CounterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      direction: true,
    }
  }

  handleChangeDirection = () => this.setState({ direction: !this.state.direction })

  render() {
    const stepBtn = classNames(styles.stepBtn, 'button');
    const directionBtn = classNames(
      'button',
      styles.directionBtn,
      this.state.direction ? styles.increase : styles.decrease,
    );

    return (
      <>
        <button className={stepBtn} >Step: {this.state.step}</button>
        <button className={directionBtn} onClick={this.handleChangeDirection} >
          {this.state.direction ? 'increase' : 'decrease'}
        </button>
      </>
    )
  }
}
