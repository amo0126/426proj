import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import {Navbar, NavbarBrand, NavbarItem, brand, NavbarBurger, NavbarMenu,
NavbarStart, Field, Button, NavbarLink, Control, NavbarDropdown, NavbarEnd  } from 'bloomer';
import {Link, BrowserRouter as Router} from 'react-router-dom';

export class Nav extends Component {
    render() {
      return (
          <Router>
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
            <NavbarBrand>
                <NavbarItem>
                    <img src={brand} style={{ marginRight: 5 }} alt=''/> Logo Here
                </NavbarItem>
                <NavbarBurger onClick={this.onClickNav}/>
            </NavbarBrand>
            <NavbarMenu onClick={this.onClickNav}>
                <NavbarStart>
                    <NavbarItem><Link to={"/"}>Home</Link></NavbarItem>
                    <NavbarItem><Link to={"/journal"}>Journal</Link></NavbarItem>
                    <NavbarItem hasDropdown isHoverable>
                        <NavbarLink><Link to={"/selfcare"}>Self-Care</Link></NavbarLink>
                        <NavbarDropdown>
                            <NavbarItem href='#/'>Mental Self-Care</NavbarItem>
                            <NavbarItem href='#/'>Practical Self-Care</NavbarItem>
                            <NavbarItem href='#/'>Physical Self-Care</NavbarItem>
                            <NavbarItem href='#/'>Social Self-Care</NavbarItem>
                        </NavbarDropdown>
                    </NavbarItem>
                </NavbarStart>
                <NavbarEnd>
                    <NavbarItem>
                        <Field isGrouped>
                            <Control>
                                <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                                data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                                a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                    <span>Sign up</span>
                                </Button>
                            </Control>
                            <Control>
                                <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                                data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                                a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                    <span>Login</span>
                                </Button>
                            </Control>
                        </Field>
                    </NavbarItem>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
        </Router>
    );
    }
  }
  
  export default Nav;