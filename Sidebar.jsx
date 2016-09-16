import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

// const options = ['profile', 'account', 'email'];

class Sidebar extends React.Component {
  constructor() {
    super();
  }

  setAccountPage(pageName) {
    console.log(pageName);
  }

  render() {
    return (

      <nav className="col-md-2 sidebar">
        <h3 className="header">Settings</h3>
        {
          this.props.sidebarOptions.pages.map(
            (option) => {
              let className = option.active ? 'sidebar-item active' : 'sidebar-item';
              return <div
                className={className}
                key={option.id}
                onClick={this.props.itemClickHandler.bind(this, option.id)}>
                {option.name}
              </div>
            })
        }
      </nav>
    )
  }
}

export default Sidebar;
