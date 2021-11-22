import React, { Component } from 'react'
import styles from './ShowStep.module.css'

export default class ShowStep extends Component {
  render() {
    return (
      <div className={styles.currentStep}>current step: {this.props.step}</div>
    )
  }
}
