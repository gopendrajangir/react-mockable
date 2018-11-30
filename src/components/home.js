import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  redirectToLogin() {
    this.props.history.push('/login');
  }
  componentDidMount() {
    this.redirectToLogin();
  }
  render() {
    return (<div></div>);
  }
}

export default withRouter(Home);