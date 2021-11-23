import React, { Component } from 'react'
import UpdateFrequency from './UpdateFrequency';
import styles from './AutoClick.module.css'
import classNames from 'classnames';
import { max } from './options.json'
import AutoClickButton from './AutoClickButton';

export default class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 1,
      duration: max,
      enableSettings: false,
    }
  }

  handleToggleState = (item) => this.setState({ [item]: !this.state[item] });
  setFrequency = (newFrequency) => this.setState({ frequency: newFrequency });

  resetDuration = () => this.setState({ duration: max });
  updateDuration = () => this.setState(({ duration, frequency }) => {
    this.props.setValue(frequency < duration ? frequency : duration);
    return { duration: duration - frequency }
  })

  render() {
    const { frequency, duration, enableSettings } = this.state;
    const { step } = this.props;

    const settingBtnClasses = classNames(
      styles.showSettingsBtn,
      enableSettings ? styles.rotateBtn : undefined
    )

    return (
      <div className={styles.autoClickContainer}>
        <div className={styles.timerContainer}>
          <button
            className={settingBtnClasses}
            onClick={() => this.handleToggleState('enableSettings')}
          ></button>
          <AutoClickButton
            frequency={frequency}
            duration={duration}
            updateDuration={this.updateDuration}
            resetDuration={this.resetDuration}
          />
        </div>
        {enableSettings ? <UpdateFrequency step={step} frequency={frequency} setFrequency={this.setFrequency} /> : undefined}
      </div>
    )
  }
}
