import classNames from 'classnames';
import React from 'react'
import styles from './CounterСontrol.module.css'

export default function CounterControl(props) {
    const { setValue, changeDirection, direction } = props;

    const addBtnClasses = classNames(
      'button',
      styles.stepBtn,
    );

    const directionBtnClasses = classNames(
      'button',
      direction ? styles.increase : styles.decrease,
    );

    return (
      <div className={styles.btnContainer}>
        <button className={addBtnClasses} onClick={setValue} >{direction ? 'increase' : 'decrease'}</button>
        <button className={directionBtnClasses} onClick={changeDirection} >change</button>
      </div>
    )
}
