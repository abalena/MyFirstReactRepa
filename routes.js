import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import BookDetails from './containers/BookDetails.js'
import AuthorDetails from './containers/AuthorDetails'
export default (
  <Route path="/" component={App}>
    <Route path="/book/:name"
      component={BookDetails} />
    <Route path ="/author/:name"
      component={AuthorDetails}/>       
  </Route>
)
