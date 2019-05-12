import React, { Component } from 'react';

// function MenuComponent() {
//   return <h1>TreinaWeb</h1>;
// }

// const MenuComponente = () => {
//   return <h1>TreinaWeb</h1>;
// }

class MenuComponent extends React.Component {

  render() {
    return <h1>TreinaWeb</h1>;
  }
}

export const MeusComponentes = {
  TreinaWeb: function() {
    return <h1>Olá comvex</h1>
  }
};

export default MenuComponent;
