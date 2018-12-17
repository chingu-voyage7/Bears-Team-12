import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import banner from 'content/banner'
import missionStatement from 'content/missionStatement'
import './Landing.css'

const Landing = () =>
    <div className='landing-wrapper'>
        <div className='landing-content-wrapper'>
            <div className='main'>
                <div className='landing-left'>
                    <h4 className='title' style={{whiteSpace : 'pre-wrap'}}>{banner}</h4>
                    <p className='subtitle is-4'>{missionStatement}</p>
                </div>
                <div className='landing-right'>
                    <img className="landing-banner" src='/assets/images/banner/blank.jpg' />
                </div>
            </div>
            <div className='learn-more'>
                 <img src='/assets/images/icons/down.svg' />
                 <p>Learn More</p>
            </div>
        </div>
        <div className='landing-breakdown'>
            <h4 className='title' style={{whiteSpace : 'pre-wrap'}}>Your space, your terms</h4>
            <div className='on-boarding'>
                <div className='step'>
                    <div className='step-icon subtitle is-1'>
                        🤔
                    </div>
                    <div className='step-annotation subtitle is-4'>
                        You have problematic ideas you feel you are unable to share with your family, friends or colleagues lest you want to completely alienate them.
                    </div>
                </div>
                <div className='step'>
                    <div className='step-icon subtitle is-1'>
                        📜
                    </div>
                    <div className='step-annotation subtitle is-4'>
                        On Communities, you can show them you're not crazy by creating quality educational content that shows them your thought process and resources.
                    </div>
                </div>
                <div className='step'>
                    <div className='step-icon subtitle is-1'>
                    📢
                    </div>
                    <div className='step-annotation subtitle is-4'>
                        Finally, no need to worry about judgement. You'll find other like minded individuals who can contribute to your courses. You can join theirs too.
                    </div>
                </div>
                <a className='is-4'>Time to sign up</a>
            </div>
        </div>
    </div>

export default Landing
