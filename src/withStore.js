import React from 'react'
import assert from './util/assert'
import {
  Observable
} from 'rx'

export default function withStore(store, prop = 'data') {
  return Child => class StoreContainer extends React.Component {
    constructor(props) {
      super(props)

      if (typeof store === 'function') {
        this.store = store(props)
      } else {
        this.store = store
      }

      this.state = {
        data: null
      }
    }

    componentWillMount() {
      assert(this.store instanceof Observable, 'Expected `store` to be an Observable.')
      this.sub = this.store.subscribe(next => {
        this.setState({
          data: next
        })
      }, err => {
        throw err
      })
    }

    componentWillUnmount() {
      this.sub.dispose()
    }

    render() {
      if (this.state.data === null) return null

      const props = {}
      props[prop] = this.state.data
      return <Child {...Object.assign({}, this.props, props)}/>
    }
  }
}
