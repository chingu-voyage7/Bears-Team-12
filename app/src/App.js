import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import axios from 'axios'
import './App.css'

import Landing from 'views/Landing'
import About from 'views/About'

import Header from 'components/Header'
import Footer from 'components/Footer'

const testBackend = message => {

    axios.get('/api/test')
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/graphql",
    //credentials: 'same-origin'
  }),
  cache: new InMemoryCache()
});

class App extends Component {

  constructor() {
      super()

      /* test back end*/
      // testBackend()
  }

  render() {

    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <Header />
            <div>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/about" component={About}/>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
