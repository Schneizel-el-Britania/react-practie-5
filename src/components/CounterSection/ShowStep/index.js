import React from 'react'
import styles from './ShowStep.module.css'

export default function ShowStep({ step }) {
  return (
    <div className={styles.currentStep}>current step: {step}</div>
  )
}
