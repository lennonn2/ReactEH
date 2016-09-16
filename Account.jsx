import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Profile from './Profile';
import _ from 'lodash';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: [{
        id: 'profile',
        name: 'Profile',
        text: 'This is the profile page',
        active: true
      }, {
        id: 'account',
        name: 'Account',
        text: 'This is the account page',
        active: false
      }, {
        id: 'email',
        name: 'Email',
        text: 'This is the email page',
        active: false
      }]
    }
  }

  toggleMainPage(pageID) {
    const state = this.state;
    var pages = [];
    pages = _.map(state.pages,
      (page) => {
        if (page.id === pageID) page.active = true;
        else page.active = false;
        return page;
      });
    this.setState({pages})
  }

  getActivePage() {
    const types = {profile: Profile};
    const activePage = _.filter(this.state.pages, (page) => page.active)
    if (activePage[0].id === 'profile') {
      // const CustomTag = `${activePage[0].name}`;
      const myprof = types['profile'];
      return React.createElement(myprof, {text: activePage[0].text});
    } else {
      return activePage[0].text;
    }
  }

  render() {
    const stateParam = this.state;
    return (
      <div className="account">
        <div className="container-fluid">
          <Sidebar
            sidebarOptions={stateParam}
            itemClickHandler={this.toggleMainPage.bind(this)} />
          <div>{this.getActivePage()}</div>
        </div>
      </div>
    )
  }
}

export default Account;
