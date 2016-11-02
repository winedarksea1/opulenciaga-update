'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Category from './components/category'

render (
  <Provider store={store}>
    <Category/>
  </Provider>,
  document.getElementById('submain')
)
