import React, { Component } from 'react';
import CounterСontrol from '../CounterСontrol';
import styles from './Counter.module.css'

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.value = 0;
  }

  appendZeros = (num, len) => {
    num = num.toString();
    return (len - num.length > 0) ? new Array(len + 1 - num.length).join('0') + num : num;
  };

  // setStep = () => 

  render() {
    return (
      <article className={styles.counter}>
        <p className={styles.value}>{this.appendZeros(this.value, 4)}</p>
        <CounterСontrol />
      </article>
    )
  }
}
