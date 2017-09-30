import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Header from './Header.jsx'
import MainSection from './MainSection.jsx'

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainSection/>
      </div>
    )
  }
}
