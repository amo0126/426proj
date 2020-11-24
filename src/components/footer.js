import React, { Component } from "react";
import {Container, Content, Columns, Icon, Column, Footer } from 'bloomer';

export class Foot extends Component {
    render() {
        return(
            <Footer id='footer'>
                <Container>
                    <Content>
                        <Columns>
                            <Column isFull>
                                <p>
                                    Made
                                    by <a>Alexis Ortiz and Lucy Hill</a>
                                </p>
                            </Column>
                        </Columns>
                        <Content isSize='small'>
                            <p><a href="https://github.com/amo0126/426proj">GitHub Repository</a>.</p>
                        </Content>
                    </Content>
                </Container>
            </Footer>
        );
    }
}
export default Foot;