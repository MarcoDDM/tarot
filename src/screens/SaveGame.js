import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { saveGame, showNotification } from '../actions'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import moment from 'moment';
import 'moment/locale/pt-br';

const styles = {
  root: {
    display: 'block',
    width: '90%',
    margin: '0 auto'
  },
  floatingLabelStyle: {
    color: 'rgb(255, 255, 255)'
  },
  underlineFocusStyle: {
    borderColor: 'rgb(255, 255, 255)'
  },
  button: {
    display: 'block',
    width: '40%',
    margin: '33px auto'
  }
}

class SaveGame extends Component {

  constructor(props){
    super(props)
    this.state = {
      observationsField: '',
      textFieldError: '',
      canSave: true
    }
  }

  handleSaveGame(){
    if(!this.state.canSave) return

    if(!this.state.observationsField){
      this.setState({ textFieldError: 'Preenchimento obrigatório. Dica: digite sua questão.' })
      return
    }

    this.saveGame()
  }

  saveGame(){
    this.setState({ observationsField: '', canSave: false })

    const date = moment()
    const save = {
      spreadType: this.props.spreadTypeState,
      choices: this.props.userChoiceState,
      observations: this.state.observationsField,
      timestamp: date,
      fullDate: date.format("dddd, DD [de] MMMM [de] YYYY"),
      hour: date.format("HH[h]mm a")
    }
    this.props.saveGame(save)

    this.props.showNotification({
      open: true,
      message: 'Jogo salvo com sucesso!',
      duration: 3000
    })

    setTimeout(() => this.props.navigate('/'), 300)
  }

  render(){
    return (
      <div>
        <h1 className="page-title">Salvar Jogo</h1>
        <TextField
          floatingLabelText="Observações"
          multiLine={true}
          rows={3}
          rowsMax={6}
          style={styles.root}
          floatingLabelStyle={styles.floatingLabelStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
          errorText={this.state.textFieldError}
          onChange={(e, value) => this.setState({ observationsField: value, textFieldError: ''})}
          value={this.state.observationsField}
        />
        <RaisedButton
          label="Salvar"
          style={styles.button}
          disabled={!this.state.canSave}
          onTouchTap={() => this.handleSaveGame()}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spreadTypeState: state.spreadTypeState.type,
  userChoiceState: state.userChoiceState
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(push(route)),
  saveGame: state => dispatch(saveGame(state)),
  showNotification: notification => dispatch(showNotification(notification))
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveGame)
