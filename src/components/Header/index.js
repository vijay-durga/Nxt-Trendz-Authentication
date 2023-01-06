import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <ul className="ul-cont">
          <li className="line">
            <Link to="/">Home</Link>
          </li>
          <li className="line">
            <Link to="/product">Products</Link>
          </li>
          <li className="line">
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/logout">
              <button type="button" className="logout-desktop-btn">
                Logout
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
