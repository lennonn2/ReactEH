import React from 'react';
import ReactDOM from 'react-dom';
import MenuOptions from './data/accounts_pages';
import _ from 'lodash';

class Sidebar extends React.Component {
  constructor() {
    super();
  }
  render() {
    _.each(MenuOptions, function(option) {
      return (
        <div>option</div>
      )
    })
  }
}

export default Sidebar;
