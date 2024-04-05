import React, { Component } from 'react'

export class About extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Eshant",
         id:1
      }
    }
  render() {
    return (
      <div>
      About
      <div className='about'>Hello</div>
      </div>
    )
  }
}

export default About;