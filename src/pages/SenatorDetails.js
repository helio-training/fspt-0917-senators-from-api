import React, { Component } from 'react'

import SenatorService from '../service'

export default class extends Component {

  state = {
    senator: {},
  }



  async componentDidMount() {
    const senators = await SenatorService()
    const id = this.props.match.params.id

    // Dang it Tyler, you broke it
    // const senator = senators.find(senator => senator.person.cspanid === id)
    // const senator = senators[0]
    // console.log(senator)
    // this.setState({ senator })
  }


  render() {
    const { senator } = this.state

    return (
      <div>
        <h1>Senator Details</h1>
        <div>{this.props.match.params.id}</div>
        {/*<h1>{senator.person.name}</h1>*/}
      </div>
    )
  }
}