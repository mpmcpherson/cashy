import React from "react";

class Header extends React.Component {
  render() {
    return(
    <header>
  		<nav>
  			<a href='/'>Home</a>
  			<a href='/app'>App</a>
        <a href='/marketing'>Marketing</a>
        <a href='/aboutme'>About Me</a>
  		</nav>
     </header>
    );
  }
}

export default Header;