import React from 'react'
import { ChannelList, useChatContext} from 'stream-chat-react'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

import LogoIcon from '../assets/logo.png'
import LogOutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={LogoIcon} alt='Slack Clone' width='30'/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogOutIcon} alt='Logout' width='30'/>
            </div>
        </div>
    </div>
)

const Header = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Boom</p>
    </div>
)

const ChannelListContainer = () => {
  return (
    <>
        <SideBar/>
        <div className='channel-list__list__wrapper'>
            <Header />
        </div>
    </>
  )
}

export default ChannelListContainer