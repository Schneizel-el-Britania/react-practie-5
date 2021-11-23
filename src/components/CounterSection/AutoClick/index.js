import React, { Component } from 'react'
import UpdateFrequency from './UpdateFrequency';
import styles from './AutoClick.module.css'
import classNames from 'classnames';

export default class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 1,
      step: 1,
      duration: 30,
      enableSettings: false,
    }
    this.enableSettings = false;
  }

  showSettings = () => this.setState({ enableSettings: !this.state.enableSettings });
  setFrequency = (newFrequency) => this.setState({ frequency: newFrequency });

  render() {
    const { frequency, step, duration, enableSettings } = this.state;

    const settingBtnClasses = classNames(
      styles.showSettingsBtn,
      enableSettings ? styles.rotateBtn : undefined
    )

    return (
      <div className={styles.autoClickContainer}>
        <div className={styles.timerContainer}>
          <button className={settingBtnClasses} onClick={this.showSettings}></button>
          <button className={styles.autoClickBtn}></button>
          <p className={styles.description}>Time left: {duration}</p>
        </div>
        {enableSettings ? <UpdateFrequency frequency={frequency} setFrequency={this.setFrequency} /> : undefined}
      </div>
    )
  }
}
