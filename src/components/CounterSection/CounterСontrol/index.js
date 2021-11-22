import classNames from 'classnames';
import React, { Component } from 'react'
import styles from './CounterСontrol.module.css'

export default class CounterControl extends Component {
  render() {
    const { setValue, changeDirection, direction } = this.props;

    const addBtnClasses = classNames(
      'button',
      styles.stepBtn,
    );

    const directionBtnClasses = classNames(
      'button',
      styles.directionBtn,
      direction ? styles.increase : styles.decrease,
    );

    return (
      <>
        <button className={addBtnClasses} onClick={setValue} >{direction ? 'increase' : 'decrease'}</button>
        <button className={directionBtnClasses} onClick={changeDirection} >change</button>
      </>
    )
  }
}
