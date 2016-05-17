import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import BookDetails from './containers/BookDetails.js'
import AuthorDetails from './containers/AuthorDetails'
import InputBox from './components/InputBox.js'
import AllAuthors from './containers/AllAuthors.js'
import AllBooks from './containers/AllBooks.js'
export default (
  <Route path="/" component={App}>
    <Route path = "/test"
      component={InputBox}/>
    <Route path="/book/:name"
      component={BookDetails} />
    <Route path="/author/:name"
      component={AuthorDetails}/>
    <Route path="/authors"
      component={AllAuthors}/>
    <Route path="/books"
      component={AllBooks}/>
  </Route>

)
