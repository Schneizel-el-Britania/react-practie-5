import React, { Component } from 'react'
import UpdateFrequency from './UpdateFrequency';
import styles from './AutoClick.module.css'
import classNames from 'classnames';
import { max } from './options.json'

export default class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 1,
      step: 1,
      duration: max,
      enableSettings: false,
      onPause: false,
    }
  }

  handleToggleState = (item) => this.setState({ [item]: !this.state[item] });
  setFrequency = (newFrequency) => this.setState({ frequency: newFrequency });

  render() {
    const { frequency, step, duration, enableSettings, onPause } = this.state;

    const settingBtnClasses = classNames(
      styles.showSettingsBtn,
      enableSettings ? styles.rotateBtn : undefined
    )
    const autoClickBtnClasses = classNames(
      styles.autoClickBtn,
      onPause ? undefined : styles.activeState,
    );

    return (
      <div className={styles.autoClickContainer}>
        <div className={styles.timerContainer}>
          <button
            className={settingBtnClasses}
            onClick={() => this.handleToggleState('enableSettings')}
          ></button>
          <button
            className={autoClickBtnClasses}
            onClick={() => this.handleToggleState('onPause')}
          >{duration}</button>
        </div>
        {enableSettings ? <UpdateFrequency frequency={frequency} setFrequency={this.setFrequency} /> : undefined}
      </div>
    )
  }
}
