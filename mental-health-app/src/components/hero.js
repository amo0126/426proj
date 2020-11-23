import React, { Component } from 'react';
import {Hero, HeroBody, HeroFooter, HeroHeader, Nav,
Container, Tabs, TabLink, Tab, Title, TabList, Section} from 'bloomer';
import {Link} from 'react-router-dom';
import './hero.css';

export class HeroCard extends Component {
    render() {
        return (
            <div>
            <Hero isColor='info' isSize='medium'>
                <HeroHeader>
                </HeroHeader>

                <HeroBody>
                    <Container hasTextAlign='centered'>
                        <Title>Wellness and Selfcare</Title>
                    </Container>
                </HeroBody>

                <HeroFooter>
                    <Tabs isBoxed isFullWidth>
                        <Container>
                            <TabList>
                                <Tab isActive><Link to="/selfcare" class='link'>The Importance of Self Care</Link></Tab>
                                <Tab><Link to="/mental" class='link'>Mental Wellness</Link></Tab>
                                <Tab><Link to="/physical" class='link'>Physical Wellness</Link></Tab>
                                <Tab><Link to="/practical" class='link'>Practical Self Care</Link></Tab>
                                <Tab><Link to="/social" class='link'>Social Wellness</Link></Tab>
                            </TabList>
                        </Container>
                    </Tabs>
                </HeroFooter>
                </Hero>
                <body>
                    <Section>
                        The importance of selfcare
                    </Section>   
                </body>
            </div>
        );
    }
}

export default HeroCard;