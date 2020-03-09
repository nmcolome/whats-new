import React from 'react';
import './Menu.css'


function Menu({data}) {
  const links = data.map(title => <a className="menu-link" href="#">{title}</a> )
  return (
    <div className="menu">
      <h1 className="logo"><span className="white">What's</span> <span className="yellow">New?</span></h1>
      {links}
    </div>
  )
}

export default Menu;