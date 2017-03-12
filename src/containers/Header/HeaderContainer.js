import React, { Component } from 'react'
import HeaderBar from '../../components/HeaderBar'
import DrawerMenu from '../../components/DrawerMenu'

class HeaderContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { openDrawerMenu: false };
  }

  toogleOpenDrawerMenu(){
    this.setState({ ...this.state, openDrawerMenu: !this.state.openDrawerMenu })
  }

  render(){
    return(
      <div>
      <HeaderBar toogleOpenDrawerMenu={() => this.toogleOpenDrawerMenu()} />
      <DrawerMenu
        open={this.state.openDrawerMenu}
        onRequestChange={() => this.toogleOpenDrawerMenu()} />
      </div>
    )
  }
}

export default HeaderContainer
