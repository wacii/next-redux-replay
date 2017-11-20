import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { makeStore } from '../store'
import withRedux from 'next-redux-replay'
import Page from '../components/Page'

const PageComponent = () => <Page title='Other Page' linkTo='/' />

function initStore({ store, isServer }) {
  return Promise.resolve()
}

export default withRedux(makeStore, initStore)(PageComponent)
