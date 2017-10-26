import React, { Component } from 'react'

import SenatorService from '../service'

export default class extends Component {

  state = {
    senators: [],
  }


  async componentDidMount() {
    const senators = await SenatorService()
    this.setState({ senators })
  }


  render() {
    const { senators } = this.state

    return (
      <div>
        {senators.map(senator => (
            <div key={senator.person.cspanid}>
              <a href={`/senators/${senator.person.cspanid}`}>{senator.person.name}</a>
            </div>
          ),
        )}
      </div>
    )
  }
}