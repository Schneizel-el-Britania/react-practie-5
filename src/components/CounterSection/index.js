import React from 'react'
import Counter from './Counter'
import styles from './CounterSection.module.css'

export default function CounterSection() {
  return (
    <section>
      <h2 className="sectionHeader">Counters</h2>
      <div className={styles.counterContainer}>
        <Counter />
      </div>
    </section>
  )
}
