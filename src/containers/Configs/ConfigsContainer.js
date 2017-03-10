import React, { Component } from 'react'

import { Row, Col } from '../../components/Grid'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

class ConfigsContainer extends Component {

  render(){
    return(
      <div>
          <Row>
            <Col lg={2} md={2} sm={2} xs={2}>
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton value="1" label="" />
              </RadioButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={2} sm={2} xs={2}>
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton value="2" label="" />
              </RadioButtonGroup>
            </Col>
          </Row>
      </div>
    )
  }

}

export default ConfigsContainer
