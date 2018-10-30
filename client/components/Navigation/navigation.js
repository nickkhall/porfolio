import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      menuItems: [
        {
          label: 'About',
          link: null
        },
        {
          label: 'Projects',
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
        className="navigation"
        role="presentation"
        onClick={this.openMenu}
      >
        {
          menuItems.map(item => (
            <li key={item.label} className={`navigation-item ${menuItemClassName}`}>
              <em>{ item.label }</em>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Navigation;
