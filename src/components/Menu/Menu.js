// import React from 'react';
import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.getText = this.getText.bind(this)
  }

  getText(e) {
    this.props.handleClick(e.target.text);
  }


  render() {
    const titles = this.props.titles
    const links = titles.map((title) => <a onClick={this.getText} className="menu-link">{title}</a>)

    return (
      <div className="menu">
        <h1 className="logo"><span className="white">What's</span> <span className="yellow">New?</span></h1>
        {links}
      </div>
    )
  }
}

export default Menu;