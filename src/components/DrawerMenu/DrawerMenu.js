import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

import New from 'material-ui/svg-icons/av/fiber-new'
import IconA from 'material-ui/svg-icons/content/font-download'
import Settings from 'material-ui/svg-icons/action/settings'
import Help from 'material-ui/svg-icons/action/help'
import Build from 'material-ui/svg-icons/action/build'
import SavedGames from 'material-ui/svg-icons/device/storage'

const DrawerMenu = ({ open, onRequestChange, navigate }) => {

  const handleOnRequestChange = () => onRequestChange()

  const handleMenuItem = route => {
    if(route==='soon'){
      alert('Estamos trabajando en esa función, gracias por su paciencia...')
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
        primaryText="Nueva tirada"
        leftIcon={<New/>}
        onTouchTap={() => handleMenuItem('/')} />
      <MenuItem
        primaryText="Tiradas guardadas"
        leftIcon={<SavedGames/>}
        onTouchTap={() => handleMenuItem('/saved-games')} />
      <MenuItem
        primaryText="Arcanos"
        leftIcon={<IconA/>}
        onTouchTap={() => handleMenuItem('/arcanums')} />
      <Divider />
      <MenuItem
        primaryText="Configuración"
        leftIcon={<Settings/>}
        onTouchTap={() => handleMenuItem('/configs')} />
      <MenuItem
        primaryText="Dudas"
        leftIcon={<Help/>}
        onTouchTap={() => handleMenuItem('soon')} />
      <MenuItem
        primaryText="Ayudanos a mejorar"
        leftIcon={<Build/>}
        onTouchTap={() => handleMenuItem('soon')} />
    </Drawer>
  )
}

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(DrawerMenu)
