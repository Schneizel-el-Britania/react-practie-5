import React, { Component } from 'react'
import Counter from './Counter'
import styles from './CounterSection.module.css'

export default class CounterSection extends Component {
  render() {
    return (
      <selection>
        <h2 className="sectionHeader">Counters</h2>
        <div className={styles.counterContainer}>
          <Counter />
        </div>
      </selection>
    )
  }
}
