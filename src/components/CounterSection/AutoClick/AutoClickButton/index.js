import classNames from 'classnames';
import React, { Component } from 'react'
import styles from './AutoClickButton.module.css'

export default class AutoClickButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onPause: false
    }
    this.intervalId = null;
  }

  startIndication = () => {
    if (this.intervalId === null) {
      this.intervalId = setInterval(this.props.updateDuration, 1000);
    }
  }
  stopIndication = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  componentDidMount() {
    this.startIndication();
  }
  componentWillUnmount() {
    this.stopIndication();
  }
  componentDidUpdate() {
    if (this.props.duration <= 0) {
      this.stopIndication();
      this.toggleState('onPause');
      this.props.resetDuration()
    }
  }

  toggleState = (item) => this.setState({ [item]: !this.state[item] })

  render() {
    const { duration, resetDuration } = this.props;

    const autoClickBtnClasses = classNames(
      styles.autoClickBtn,
      this.state.onPause ? undefined : styles.activeState,
    );

    return (
      <button
        className={autoClickBtnClasses}
        onClick={() => {
          this.state.onPause ? this.startIndication() : this.stopIndication();
          this.toggleState('onPause');
          if (duration === 0) {
            resetDuration();
          }
        }
        }
      > {duration}</button >
    )
  }
}
