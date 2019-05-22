import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <img className="logo-studio" src="https://www.studiocentoedez.com.br/wp-content/uploads/2018/09/logo-200.png" alt="logo" />
      <div>
        <AnchorLink href=".footer">quem somos</AnchorLink>
        <AnchorLink href="https://google.com.br">serviços</AnchorLink>
        <AnchorLink href="https://google.com.br">contato</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
