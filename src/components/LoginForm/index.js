import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  onSubmittingForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-cont">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
        </div>

        <form onSubmit={this.onSubmittingForm}>
          <div className="information-cont">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="website-logo-login"
              />
            </div>

            <div className="input-cont">
              <label htmlFor="userName" className="label-name">
                UserName
              </label>
              <input
                type="text"
                id="userName"
                placeholder="UserName"
                className="input-text"
                onChange={this.onChangeUserName}
              />
            </div>

            <div className="input-cont">
              <label htmlFor="password" className="label-name">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input-text"
                onChange={this.onChangePassword}
              />
            </div>

            <div>
              <button type="submit" className="button">
                Login
              </button>
            </div>

            {showErrorMsg && <p className="para">*{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
