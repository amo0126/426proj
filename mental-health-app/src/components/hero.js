import React, { Component } from 'react';
import {Hero, HeroBody, HeroFooter, HeroHeader, Nav,
Container, Tabs, TabLink, Tab, Title, TabList, Section} from 'bloomer';
import {Link} from 'react-router-dom';

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
                                <Tab isActive><Link to="/selfcare" class='link'><TabLink>The Importance of Self Care</TabLink></Link></Tab>
                                <Tab><Link to="/mental" class='link'><TabLink>Mental Wellbeing</TabLink></Link></Tab>
                                <Tab><Link to="/physical" class='link'><TabLink>Physical Wellbeing</TabLink></Link></Tab>
                                <Tab><Link to="/practical" class='link'><TabLink>Practical Self Care</TabLink></Link></Tab>
                                <Tab><Link to="/social" class='link'><TabLink>Social Wellbeing</TabLink></Link></Tab>
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