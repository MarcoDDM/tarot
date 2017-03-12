import React from 'react'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

import New from 'material-ui/svg-icons/av/fiber-new'
import Settings from 'material-ui/svg-icons/action/settings'
import Help from 'material-ui/svg-icons/action/help'
import Build from 'material-ui/svg-icons/action/build'

import { hashHistory } from 'react-router'

const DrawerMenu = props => {

  const handleOnRequestChange = () => {
    props.handleOnRequestChange()
  }

  const handleMenuItem = route => {
    if(hashHistory.getCurrentLocation().pathname !== route){
      props.handleOnRequestChange()
      setTimeout(() => hashHistory.push(route), 100)
    }

    if(route==='soon'){
      alert('Em breve...')
      return
    }
  }

  return (
    <Drawer
      docked={false}
      width={280}
      open={props.open}
      onRequestChange={() => handleOnRequestChange()} >
      <MenuItem
        primaryText="Novo jogo"
        leftIcon={<New/>}
        onTouchTap={() => handleMenuItem('/')} />
      <MenuItem
        primaryText="Configurações"
        leftIcon={<Settings/>}
        onTouchTap={() => handleMenuItem('/configs')} />
      <Divider />
      <MenuItem
        primaryText="Dúvidas"
        leftIcon={<Help/>}
        onTouchTap={() => handleMenuItem('soon')} />
      <MenuItem
        primaryText="Ajude-nos a melhorar"
        leftIcon={<Build/>}
        onTouchTap={() => handleMenuItem('soon')} />
    </Drawer>
  )
}

export default DrawerMenu
