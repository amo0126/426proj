import React, { Component } from 'react';
import {Hero, HeroBody, HeroFooter, HeroHeader, Nav,
Container, Tabs, Content, Tab, Title, TabList, Section} from 'bloomer';
import {Link} from 'react-router-dom';

export class Physical extends Component {
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
                                <Tab isActive><Link to="/physical" class='link'>Physical Wellness</Link></Tab>
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
                            <h1>Physical Wellness</h1>
                            <p>
                                Physical Wellness is important for both your health and happiness. According to 
                                doctors, participating in physical activity for at least 30 minutes a day will
                                improve the levels of seratonin in your body. Some common physical activities that also 
                                promote a healthy mind are running, yoga, and pilates.
                            </p>
                        </Content> 
                    </Section> 
                </body>
            </div>
        );
    }
}

export default Physical;