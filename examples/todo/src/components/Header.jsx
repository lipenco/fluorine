import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoTextInput from './TodoTextInput'
import { addTodo } from '../actions/todo'
import { dispatch } from '../dispatcher'

export default class HeaderComp extends Component {
  handleSave = (text) => {
    if (text.length !== 0) {
      dispatch(addTodo(text))
    }
  };

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <TodoTextInput newTodo
            onSave={this.handleSave}
            placeholder="What needs to be done?" />
      </header>
    )
  }
}
