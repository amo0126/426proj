import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Navbar, NavbarBrand, NavbarItem, brand, Icon, NavbarBurger, NavbarMenu,
NavbarStart, Field, Button, NavbarLink, Control, NavbarDropdown, NavbarDivider, NavbarEnd  } from 'bloomer';

class Nav extends Component {
    render() {
      return (
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
            <NavbarBrand>
                <NavbarItem>
                    <img src={brand} style={{ marginRight: 5 }} /> Bloomer
                </NavbarItem>
                <NavbarItem isHidden='desktop'>
                    <Icon className='fa fa-github' />
                </NavbarItem>
                <NavbarItem isHidden='desktop'>
                    <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
                </NavbarItem>
                <NavbarBurger />
            </NavbarBrand>
            <NavbarMenu >
                <NavbarStart>
                    <NavbarItem href='index.js'>Home</NavbarItem>
                    <NavbarItem hasDropdown isHoverable>
                        <NavbarLink href='#/documentation'>Documentation</NavbarLink>
                        <NavbarDropdown>
                            <NavbarItem href='#/'>One A</NavbarItem>
                            <NavbarItem href='#/'>Two B</NavbarItem>
                            <NavbarDivider />
                            <NavbarItem href='#/'>Two A</NavbarItem>
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
    );
    }
  }
  
  export default Nav;