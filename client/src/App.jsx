import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import {Cookies} from 'universal-cookie'
import { ChannelContainer, ChannelListContainer } from './components/index'

import './App.css'

const apiKey = '8rv59re7heay'
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
        <Chat client={client}>
            <ChannelListContainer/>

            <ChannelContainer/>
        </Chat>
    </div>
  )
}

export default App