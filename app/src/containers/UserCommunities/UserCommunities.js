import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import UserCommunities from 'components/UserCommunities'

class UserCommunitiesContainer {

    render() {
        return (
            <div className='user-communities-container'>
                <UserCommunities communities={communities} />
            </div>
        )
    }
}

export default graphql(gql`
  query UserCommunities {
    communities {
      userId {
          name
          thumbnail
      }
    }
  }
`)(UserCommunitiesContainer)
