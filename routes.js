import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import BookDetails from './containers/BookDetails.js'
import AuthorDetails from './containers/AuthorDetails'
import AllAuthors from './containers/AllAuthors.js'
import AllBooks from './containers/AllBooks.js'
import Genre from './containers/Genre.js'
export default (
  <Route path="/" component={App}>
    <Route path="/book/:name"
      component={BookDetails} />
    <Route path="/author/:name"
      component={AuthorDetails}/>
    <Route path="/authors"
      component={AllAuthors}/>
    <Route path="/books"
      component={AllBooks}/>
    <Route path="/genre/:name"
      component={Genre}/>
  </Route>

)
