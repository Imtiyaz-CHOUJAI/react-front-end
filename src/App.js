import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import Icon from './components/Icon';
import FormGroup from './components/FormGroup';
import Label from './components/Label';
import Input from './components/Input';
import Link from './components/Link';
import CheckLogin from './components/CheckLogin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false, // switch between Login and SignUp
      email: '',
      password: '',
      name: '',
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  handleLoginClick() {
    this.setState(state => ({ login: !state.login }));
  }

  submit() {
    if (this.state.login) {
      console.log(`Login: Email: ${this.state.email}, Pass: ${this.state.password}`)  
    }else {
      console.log(`Sign Up: Name: ${this.state.name}, Email: ${this.state.email}, Pass: ${this.state.password}`)  
    }
  } 

  render() {
    const { login, email, password, name } = this.state

    const GlobalStyle = createGlobalStyle`
      body {
        margin: 0;
        padding: 0;
        background-color: #454857;
        font-family: 'Libre Franklin';
        font-size: 13px;	
        font-weight: 600;
      }
    `;
 
    return (
      <Wrapper>
      <GlobalStyle />
        <Title>
          {!login ? 'Sign Up' : 'Login'}
        </Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </Paragraph> 

        <Button prime>
          <Icon className="fas fa-university"></Icon>
          Continue with BankID
        </Button>

        <Button>
          <Icon className="fab fa-facebook"></Icon>
          Continue with Facebook
        </Button>

        <Title withPadding>
          {!login ? 'Sign Up' : 'Login'} using email
        </Title>

        {!login &&
          <FormGroup>
            <Label>
              First & Last Name
            </Label>

            <Input type="text" name="name" onChange={this.handleChange} value={name}></Input>
          </FormGroup>
        }

        <FormGroup>
          <Label>
            Email
          </Label>

          <Input type="email" name="email" onChange={this.handleChange} value={email}></Input>
        </FormGroup>

        <FormGroup>
          <Label>
            Password
          </Label>

          <Input type="password" name="password" onChange={this.handleChange} value={password}></Input>
        </FormGroup>

        <FormGroup>
          <Input id="terms" type="checkbox" checkbox></Input>

          <Label htmlFor="terms">
            I have read and I accept the <Link>terms and conditions</Link>
          </Label>
        </FormGroup>

        <Button submit onClick={this.submit}>
          {!login ? 'Create Account' : 'Login'}
        </Button>

        <CheckLogin>
          {!login ? "Already have an account? " : "Stil not a member? "}
          <Link onClick={this.handleLoginClick}>{!login ? "Login" : "Sign up"}</Link>
        </CheckLogin>
      </Wrapper>
    );
  }
}

export default App;
