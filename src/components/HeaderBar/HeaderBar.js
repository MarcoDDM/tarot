import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import './HeaderBar.sass'

import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import New from 'material-ui/svg-icons/av/fiber-new';
import Settings from 'material-ui/svg-icons/action/settings';
import Help from 'material-ui/svg-icons/action/help';
import Build from 'material-ui/svg-icons/action/build';

import { hashHistory } from 'react-router'

class HeaderBar extends Component {

  constructor(props) {
    super(props);
    this.state = { openDrawer: false };
  }

  handleToggle(){
    this.setState({ openDrawer: !this.state.openDrawer })
  }

  handleClose(){
    this.setState({ openDrawer: false })
  }

  handleMenuItem(route){
    if(route==='soon'){
      alert('Em breve...')
      return
    }

    if(hashHistory.getCurrentLocation().pathname !== route)
      hashHistory.push(route)

    this.setState({ openDrawer: false })
  }

  render(){
    return (
      <div>
        <AppBar
          title="myTarot"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          className="app-head-bar"
          onLeftIconButtonTouchTap={() => this.handleToggle()} />
        <Drawer
          docked={false}
          width={300}
          open={this.state.openDrawer}
          onRequestChange={openDrawer => this.setState({ openDrawer })} >
          <MenuItem
            primaryText="Novo jogo"
            leftIcon={<New/>}
            onTouchTap={() => this.handleMenuItem('/')} />
          <MenuItem
            primaryText="Configurações"
            leftIcon={<Settings/>}
            onTouchTap={() => this.handleMenuItem('soon')} />
          <Divider />
          <MenuItem
            primaryText="Dúvidas"
            leftIcon={<Help/>}
            onTouchTap={() => this.handleMenuItem('soon')} />
          <MenuItem
            primaryText="Ajude-nos a melhorar"
            leftIcon={<Build/>}
            onTouchTap={() => this.handleMenuItem('soon')} />
        </Drawer>
      </div>
    )
  }
}

export default HeaderBar
