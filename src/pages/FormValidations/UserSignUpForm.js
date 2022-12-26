import React from "react";
import { FormErrors } from "./FormErrors";

class UserSignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",

      formErrors: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
      isNameValid: false,
      isUserNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,

      isFormValid: false,
    };
  }

  handleUserInputChange = (events) => {
    const elemName = events.target.name;
    const elemValue = events.target.value;

    this.setState(
      {
        [elemName]: elemValue,
      },
      () => this.validateInputs(elemName, elemValue)
    );
  };

  validateInputs(elemName, elemValue) {
    let isNameValid = this.state.name;
    let isUserNameValid = this.state.username;
    let isEmailValid = this.state.email;
    let isPasswordValid = this.state.password;

    let validationFormErrors = this.state.formErrors;

    switch (elemName) {
      case "name":
        isNameValid = elemValue.match(/^[a-zA-Z\s]{5,}$/);
        validationFormErrors.name = isNameValid
          ? ""
          : " is invalid name should be atleast 5 characters";
        break;
      case "username":
        isUserNameValid = elemValue.match(
          /^[A-Za-z0-9_\-]{5,}$/
        );
        validationFormErrors.username = isUserNameValid
          ? ""
          : " user name is invalid . username should be more than 6 characters";
        break;
      case "email":
        isEmailValid = elemValue.match(
          /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        );
        validationFormErrors.email = isEmailValid
          ? ""
          : " invalid email address.";
        break;
      case "password":
        isPasswordValid = elemValue.match(
          /^(?=.*[\d])(?=.*[!@#$%^&+*])[\w+!@#$%^&*]{6,16}$/
        );
        validationFormErrors.password = isPasswordValid ? "" : " is Invalid";
        break;

      default:
        break;
    }

    this.setState(
      {
        formErrors: validationFormErrors,
        nameValid: isNameValid,
        userNameValid: isUserNameValid,
        emailValid: isEmailValid,
        passwordValid: isPasswordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      isFormValid:
        this.state.isNameValid &&
        this.state.isUserNameValid &&
        this.state.isEmailValid &&
        this.state.isPasswordValid,
    });
  }
  render() {
    return (
      <div className="container">
        <form autocomplete="off">
          <div>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              autoFocus 
              className="form-control"
              name="name"
              value={this.state.name}
              placeholder="User full name"
              onChange={this.handleUserInputChange}
            />
            {/* <small className="text-danger">Name is required.</small> */}
          </div>
          <div className="form-group">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              placeholder="User name eg... john_smith"
              onChange={this.handleUserInputChange}
            />
            {/* <small className="text-danger">Name is required.</small> */}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="eg... user@gmail.com"
              value={this.state.email}
              onChange={this.handleUserInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Must contain at least one number and one uppercase and lowercase letter, and at least 6 and not more than 16 characters"
              value={this.state.password}
              onChange={this.handleUserInputChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-primary"
            disabled={!this.state.isFormValid}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default UserSignUpForm;
