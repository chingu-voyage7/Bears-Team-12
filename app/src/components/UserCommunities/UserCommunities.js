import React from 'react'
import './UserCommunities.css'

const UserCommunities = ({ communities }) =>
    <div className='user-communities'>
        {communities.map({
            thumbnail,
            name,
            link
        } =>
            <div className='user-community'>
                <img className='user-community-thumbnail' src={thumbnail}/>
                <p className='user-community-name'>{name}</p>
            </div>
    )}
    </div>

export default UserCommunities
