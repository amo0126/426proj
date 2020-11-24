import React, { Component } from 'react';
import {Hero, HeroBody, HeroFooter, HeroHeader, Content,
Container, Tabs, TabLink, Tab, Title, TabList, Section} from 'bloomer';
import {Link} from 'react-router-dom';

export class Practical extends Component {
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
                                <Tab><Link to="/physical" class='link'>Physical Wellness</Link></Tab>
                                <Tab isActive><Link to="/practical" class='link'>Practical Self Care</Link></Tab>
                                <Tab><Link to="/social" class='link'>Social Wellness</Link></Tab>
                            </TabList>
                        </Container>
                    </Tabs>
                </HeroFooter>
                </Hero>
                <body>
                <Section>
                    <Content>
                        <h1>Practical Selfcare</h1>
                        <p>
                            Practical selfcare includes taking care of and pampering yourself. This can 
                            look like many things to different people. Some common activities that involve
                            taking care of yourself include getting a massage, practicing a step-by-step 
                            skin care routine, and getting at least 8 hours of sleep at night.
                        </p>
                        <p>Here is a short list of things you can do at home to practice selfcare without breaking the bank:</p>
                        <ul>
                            <li>Paint your nails</li>
                            <li>Read a book from the library that sounds interesting</li>
                            <li>Take a hot bath or shower</li>
                            <li>Watch a movie or show on your list</li>
                            <li>Watch an interesting TedTalk</li>
                            <li>Develop a new skincare routine</li>
                            <li>Go for a walk</li>
                        </ul>
                    </Content> 
                    </Section>   
                </body>
            </div>
        );
    }
}

export default Practical;