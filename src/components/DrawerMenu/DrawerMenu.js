import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

import New from 'material-ui/svg-icons/av/fiber-new'
import Settings from 'material-ui/svg-icons/action/settings'
import Help from 'material-ui/svg-icons/action/help'
import Build from 'material-ui/svg-icons/action/build'

const DrawerMenu = ({ open, onRequestChange, navigate }) => {

  const handleOnRequestChange = () => onRequestChange()

  const handleMenuItem = route => {
    if(route==='soon'){
      alert('Em breve...')
      return
    }

    onRequestChange()
    setTimeout(() => navigate(route), 100)
  }

  return (
    <Drawer
      docked={false}
      width={280}
      open={open}
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

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(DrawerMenu)
