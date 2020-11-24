import React, { Component } from 'react';
import {Hero, HeroBody, HeroFooter, HeroHeader, Content,
Container, Tabs, TabLink, Tab, Title, TabList, Section} from 'bloomer';
import {Link} from 'react-router-dom';

export class Social extends Component {
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
                                <Tab><Link to="/selfcare" class='link'>The Importance of Self Care</Link></Tab>
                                <Tab><Link to="/mental" class='link'>Mental Wellness</Link></Tab>
                                <Tab><Link to="/physical" class='link'>Physical Wellness</Link></Tab>
                                <Tab><Link to="/practical" class='link'>Practical Self Care</Link></Tab>
                                <Tab isActive><Link to="/social" class='link'>Social Wellness</Link></Tab>
                            </TabList>
                        </Container>
                    </Tabs>
                </HeroFooter>
                </Hero>
                <body>
                <Section>
                    <Content>
                        <h1>Social Wellness</h1>
                        <p>
                            In the time of COVID, it can be hard to interact with others without using a phone.
                            However, social wellness is so very important to the overall health of our minds. 
                            If possible, you should focus on activities that allow you to see others in person
                            while complying with the <a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC guidlines</a> to maintain 6 feet apart. 
                        </p>
                    </Content>
                </Section>   
                </body>
            </div>
        );
    }
}

export default Social;