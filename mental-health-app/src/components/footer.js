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
                                    by <a>Algus Dark</a>
                                </p>
                            </Column>
                        </Columns>
                        <Content isSize='small'>
                            <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
                            <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
                        </Content>
                    </Content>
                </Container>
            </Footer>
        );
    }
}
export default Foot;