import React, { Component } from 'react'

export class Blog extends Component {
  render() {
    return (
      <div className='mainClss'>
     <ul className="cls">
      <li key="Angular" className="liCss">Angular</li>
      <li key="React" className="liCss">React</li>
      <li key="JavaScript" className="liCss">JavaScript</li>
      <li key="Html" className="liCss">Html</li>
     </ul>
     <div className="numbers">
      <span>One</span>
      <span>Two</span>
     </div>
<div>
  <button className="my-button disabled btn-primary"></button>
</div>
<div className="some-class"/>
      </div>
    )
  }
}

export default Blog