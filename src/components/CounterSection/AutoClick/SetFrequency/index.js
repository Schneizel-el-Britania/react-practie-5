import React, { Component } from 'react';
import styles from './SetFrequency.module.css'

export default class SetFrequency extends Component {
  render() {
    return (
      <div className={styles.setFrequencyContainer}>
      <form className={styles.frequencyForm}>
        <p>Set frequency:</p>
        <input type="range"></input>
      </form>
      <p>{30}</p>
      </div>
    )
  }
}
