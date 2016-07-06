import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">React Todo</a>
          </div>

          <div className="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="#">Completed</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
