import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginRequest } from './../actions/login';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.loginRequest = this.loginRequest.bind(this);
    this.redirectToBooks = this.redirectToBooks.bind(this);
    this.state = {username: "", password: ""};
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }
  
  redirectToBooks() {
    this.props.history.push('/books');
  }
  
  loginRequest(event) {
    return (event) => {
      event.preventDefault();
      this.setState({username: "", password: ""});
      this.props.loginRequest()
    }
  }

  componentDidUpdate() {
    if(this.props.data) {
      this.redirectToBooks();
    }
  }
  
  updateUsername(event) {
    this.setState({username: event.target.value} )
  }
  
  updatePassword(event) {
    this.setState({password: event.target.value} )
  }

  render() {
    return(
      <form className="login-form" onSubmit={this.loginRequest(event)}>
        <div className="login-container">
          {
            this.props.requesting && <li className="list-error">Sending Your login request</li>
          }
          {
            this.props.error != null && <li className="list-error">Login Request Failed</li>
          }
          <input required value={this.state.username} onChange={this.updateUsername} id="username" placeholder="Enter Username"></input>
          <input required value={this.state.password} onChange={this.updatePassword} id="password" placeholder="Enter Password"></input>
          <input type="submit" value="Login" className="login-btn"/>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.loginStatus.data,
    requesting: state.loginStatus.requesting,
    error: state.loginStatus.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginRequest
  }, dispatch); 
}

const redirect = withRouter(Login);

export default connect(mapStateToProps, mapDispatchToProps)(redirect);