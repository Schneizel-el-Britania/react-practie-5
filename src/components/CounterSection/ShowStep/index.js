import React, { Component } from 'react'

export default class ShowStep extends Component {
  render() {
    return (
      <div>current step: {this.props.step}</div>
    )
  }
}
