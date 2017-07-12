import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import DevTools from './DevTools'
import { Router } from 'react-router'
import {configureStore} from '../store/configureStore'
export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
          {!this.isProduction && <DevTools/>}
        </div>
      </Provider>
    )
  }
}
