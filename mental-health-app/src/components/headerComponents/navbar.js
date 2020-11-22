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
                  <NavbarItem hasDropdown isHoverable>
                      <NavbarLink><Link to="/selfcare" class='link'><Button isColor='black' isOutlined>Selfcare</Button></Link></NavbarLink>
                      <NavbarDropdown>
                          <NavbarItem><Link to="/mental" class='link'>Mental Selfcare</Link></NavbarItem>
                          <NavbarItem><Link to="/physical" class='link'>Physical Selfcare</Link></NavbarItem>
                          <NavbarItem><Link to="/practical" class='link'>Practical Selfcare</Link></NavbarItem>
                          <NavbarItem><Link to="/social" class='link'>Social Selfcare</Link></NavbarItem>
                      </NavbarDropdown>
                  </NavbarItem>
              </NavbarStart>
              <NavbarEnd>
                  <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
                      <Icon className='fa fa-github' />
                  </NavbarItem>
                  <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
                      <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
                  </NavbarItem>
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