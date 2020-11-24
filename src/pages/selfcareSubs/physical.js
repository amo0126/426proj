import React, { Component } from 'react';
import {Hero, HeroBody, HeroFooter, HeroHeader, Nav,
Container, Tabs, Content, Tab, Title, TabList, Section, Box} from 'bloomer';
import {Link} from 'react-router-dom';

export class Physical extends Component {
    render() {
        return (
            <div>
            <Hero isColor='success' isSize='medium'>
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
                            <p>If you want to begin a healthy exercise routine but don't know where to start, 
                                checkout these resources:
                            </p>
                            <Box><a href="hhttps://www.blogilates.com/">Blogilates</a> - pilates with a fun, inspiring twist</Box>
                            <Box><a href="hhttps://yogawithadriene.com/">Yoga with Adriene</a> - begin a yoga practice that you will want to keep up with</Box>
                            <Box><a href="http://www.c25k.com/">C25K Running Program</a> - learn how to run a 5k in 9 weeks</Box>
                        </Content> 
                    </Section> 
                </body>
            </div>
        );
    }
}

export default Physical;