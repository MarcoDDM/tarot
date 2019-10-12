import React from 'react'
import AppBar from 'material-ui/AppBar';
import './HeaderBar.sass'

const HeaderBar = ({ toogleOpenDrawerMenu }) => (
  <AppBar
    title="Mi Tarotista Virtual"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    className="app-head-bar"
    onLeftIconButtonTouchTap={() => toogleOpenDrawerMenu()} />
)

export default HeaderBar
