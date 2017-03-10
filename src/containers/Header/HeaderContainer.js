import React, { Component } from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import DrawerMenu from '../../components/DrawerMenu/DrawerMenu'

class HeaderContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { openDrawerMenu: false };
  }

  toogleOpenDrawerMenu(){
    this.setState({ openDrawerMenu: !this.state.openDrawerMenu })
  }

  render(){
    return(
      <div>
      <HeaderBar toogleOpenDrawerMenu={() => this.toogleOpenDrawerMenu()} />
      <DrawerMenu
        open={this.state.openDrawerMenu}
        handleOnRequestChange={() => this.toogleOpenDrawerMenu()} />
      </div>
    )
  }
}

export default HeaderContainer
