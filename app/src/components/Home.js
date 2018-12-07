import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Home extends React.Component {

  constructor(props) {
    super()
    this.state = {

    }
  }

  Home() {
    console.log(this.props.data)
    if (this.props.data.loading) return (<div>Loading</div>)
    //if (this.props.data.error) return (<div>Error</div>)
    if (this.props.data) return (
      <div>
        <h1>
          Welcome to Communities {" "} { this.props.data.firstName }
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.Home()}
      </div>
    )
  }

}

export default graphql(
  gql`
    query Query {
      firstName
    }
  `
)(Home)