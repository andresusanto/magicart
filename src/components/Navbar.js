import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            MagiCart
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/account">
                  Akun
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
