import { Helmet } from "react-helmet";
import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInputGroup from "../../hocs/TextInputGroups";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    is_buyer: false,
    is_seller: false,
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, password2 } = this.state;

    if (username === "") {
      this.setState({ errors: { username: "Username is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (password === "" || password.length <= 8) {
      this.setState({
        errors: {
          password:
            "Password is required and length must be greater than 8 letters",
        },
      });
      return;
    }
    if (password2 === "" || password !== password2) {
      console.log("password2");
      this.setState({ errors: { password2: "Password doesnot match" } });
      return;
    }
    const newUser = {
      username,
      email,
      password,
      password2,
      is_buyer: true,
      is_seller: false,
    };

    console.log(newUser);
    this.props.signup(newUser);
    // Clear State
    this.setState({
      username: "",
      email: "",
      password: "",
      password2: "",

      errors: "",
    });

    // Redirect using history object
    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (localStorage.getItem("isAuthenticated") === "true") {
      this.props.history.push("/");
    }
    document.body.style.background =
      "url('https://thumbs.dreamstime.com/z/pharmacy-drugstore-background-concept-store-shelf-drug-medical-shop-medication-blank-medicine-table-pharmaceutics-healthcare-care-85198577.jpg') no-repeat center center/cover";
    const { username, email, password, password2, errors } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <title> SignUp | E-MEDHUB</title>
          <meta name="description" content="buyer signup" />
        </Helmet>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <div
            className="card mb-3 shadow border border-dark"
            style={{ width: "60vh" }}
          >
            <div
              className="card-header text-center bg-dark font-weight-bold text-white"
              style={{ fontSize: "1rem" ,fontFamily:"Times New Roman"}}
            >
               SIGNUP
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <TextInputGroup
                  label="Username"
                  name="username"
                  placeholder="Enter Name..."
                  value={username}
                  onChange={this.onChange}
                  error={errors.username}
                />
                <TextInputGroup
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email..."
                  value={email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextInputGroup
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter Password..."
                  value={password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextInputGroup
                  label="Password"
                  name="password2"
                  type="password"
                  placeholder="Enter Password..."
                  value={password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input
                  type="submit"
                  value="SignUp"
                  className="btn btn-block btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default connect(null, { signup })(SignUp);
