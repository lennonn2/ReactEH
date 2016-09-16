import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import _ from 'lodash';

class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}

export default Profile;
