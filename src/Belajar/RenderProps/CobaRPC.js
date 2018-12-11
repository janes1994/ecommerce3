import React, { Component } from 'react'

export default class CobaRPC extends Component {
  state = {on: false}

  toggle = () => this.setState({on: !this.state.on})
  render() {
    return (this.props.children({on: this.state.on, toggle: this.toggle}))
  }
}

