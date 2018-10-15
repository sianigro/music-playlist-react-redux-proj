import React, { Component } from 'react';
import { Nav } from '../layout';

class Header extends Component {
  render() {
    return (
      // Header
      <section id="header" className="wrapper">
        <div id="logo">
          <h1>
            <a href="index.html">Audio Hoes</a>
          </h1>
          <p>Your bottom hoe from way back</p>
        </div>
        <Nav />

        {/* Navbar
        <nav id="nav">
          <ul>
            <li className="current">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">Dropdown</a>
              <ul>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Magna veroeros</a>
                </li>
                <li>
                  <a href="#">Etiam nisl</a>
                </li>
                <li>
                  <a href="#">Sed consequat</a>
                  <ul>
                    <li>
                      <a href="#">Lorem dolor</a>
                    </li>
                    <li>
                      <a href="#">Amet consequat</a>
                    </li>
                    <li>
                      <a href="#">Magna phasellus</a>
                    </li>
                    <li>
                      <a href="#">Etiam nisl</a>
                    </li>
                    <li>
                      <a href="#">Sed feugiat</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Nisl tempus</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="left-sidebar.html">Left Sidebar</a>
            </li>
            <li>
              <a href="right-sidebar.html">Right Sidebar</a>
            </li>
            <li>
              <a href="no-sidebar.html">No Sidebar</a>
            </li>
          </ul>
        </nav> */}
      </section>
    );
  }
}

export default Header;
