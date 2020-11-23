import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css';
import { Navbar, NavbarBrand, Icon, brand, NavbarStart, NavbarEnd, NavbarItem,
NavbarMenu, Control, Field, Button, NavbarLink, NavbarBurger, NavbarDropdown} from 'bloomer';


export class Nav extends Component {
    render() {
      return (
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
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
                              <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                              data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                              a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                  <Icon className="fa fa-twitter" />
                                  <span>Tweet</span>
                              </Button>
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