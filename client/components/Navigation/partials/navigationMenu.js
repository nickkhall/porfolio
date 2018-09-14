import React from 'react';

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      menuItems: [{
        label: 'Projects',
        link: null
      },
      {
        label: 'About',
        link: null
      },
      {
        label: 'Contact',
        link: null
      }
      ]
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { menuItems, menuOpen } = this.state;
    const menuItemClassName = menuOpen ? 'active' : '';

    return (
      <ul
        className="navigation-menu"
        role="presentation"
        onClick={this.openMenu}
      >
        <span className="dropdown-arrow" />
        {
          menuItems.map(item => (
            <li key={item.label} className={`navigation-item ${menuItemClassName}`}>
              <h2 className="title">{ item.label }</h2>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default NavigationMenu;
