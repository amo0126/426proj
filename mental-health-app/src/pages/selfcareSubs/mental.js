import React, { Component } from 'react';
import {Hero, HeroBody, HeroFooter, HeroHeader, Nav,
Container, Tabs, Content, Tab, Title, TabList, Section} from 'bloomer';
import {Link} from 'react-router-dom';

export class Mental extends Component {
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
                        <Tab isActive><Link to="/mental" class='link'>Mental Wellness</Link></Tab>
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
                <Content>
                    <h1>Mental Wellness</h1>
                    <p>Mental Wellness is a very important part of selfcare. This form of selfcare can
                    include meditation, deep breathing exerecises, and speaking to a therapist.
                    </p>
                </Content>
            </Section>   
        </body>
    </div>
  );
  }
}

export default Mental;