import React from 'react';
import styles from './UpdateFrequency.module.css'
import rangeOptions from '../options.json'

export default function UpdateFrequency(props) {
  const { frequency, setFrequency } = props;
  const { min, max, step } = rangeOptions;
  const handleChange = ({ target: { value } }) => setFrequency(value);

  return (
    <div className={styles.frequencyContainer}>
      <p>Set frequency:</p>
      <div>
        <input
          type="range"
          className={styles.frequencyRange}
          onChange={handleChange}
          min={min} max={max} step={step}
          defaultValue={frequency}
        ></input>
        <p className={styles.currentFrequency}>{frequency}s</p>
      </div>
    </div>
  )
}
