import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css';
import { Navbar, NavbarBrand, brand, NavbarStart, NavbarEnd, NavbarItem,
NavbarMenu, Control, Field, Button, NavbarBurger} from 'bloomer';
import UserForm from '../login/createUserForm';

export class Nav extends Component {
    render() {
      return (
        <Navbar style={{ margin: '0' }}>
          <NavbarBrand>
              <NavbarItem>
                  <img src={brand} style={{ marginRight: 5 }} alt=''/> LOGO
              </NavbarItem>
              <NavbarBurger onClick={this.onClickNav} />
          </NavbarBrand>
          <NavbarMenu onClick={this.onClickNav}>
              <NavbarStart>
                  <NavbarItem><Link to="/" class='link'><Button isColor='black' isOutlined>Home</Button></Link></NavbarItem>
                  <NavbarItem><Link to="/journal" class='link'><Button isColor='black' isOutlined>Journal</Button></Link></NavbarItem>
                  <NavbarItem><Link to="/selfcare" class='link'><Button isColor='black' isOutlined>Selfcare</Button></Link></NavbarItem>
              </NavbarStart>
              <NavbarEnd>
                  <NavbarItem>
                      <Field isGrouped>
                          <Control>
                              <Button id="sign-up" target="_blank" >
                                  <span>Sign Up</span>
                              </Button>
                          </Control>
                          <Control>
                              <Link to="/signup " class='link'><Button id="log-in" target="_blank"><span>Log in</span></Button></Link>
                          </Control>
                      </Field>
                  </NavbarItem>
              </NavbarEnd>
          </NavbarMenu>
        </Navbar>
    );
    }
    }
  
  export default Nav;