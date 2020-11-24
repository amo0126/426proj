import React, { Component } from 'react';
import {Hero, HeroBody, HeroFooter, HeroHeader, Content,
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
                    <Content>
                        <h1>The importance of Selfcare</h1>
                        <p>
                        Self-care is any activity that we practice to take care
                        of our personal needs and well-being. It is vital to our mental
                        and overall health. However, it’s something we often neglect 
                        to practice.

                        Everyone has a mental state, so self-care isn’t just for people who struggle
                        with mental disease. It is important that we all take the time to try and
                        do things for our own well-being because it refreshes and recharges
                        us in order to feel and our greatest.<br/>
                        <br/>
                        Self-care improves our lives in numerous areas and in several ways, 
                        all of which are important to our overall health.

                        Practicing self-care can have remarkable effects on our self-esteem. 
                        After we take care of ourselves, it affirms our self-worth. By taking care of 
                        ourselves and our needs, we’re telling ourselves, "I deserve this". And we do.<br/>
                        <br/>
                        With regular self-care, our self-awareness is greatly enhanced. Our go-to 
                        activities will usually be something that we already enjoy, but it also gives 
                        us the chance to vary and take a look at new things. This allows us to work 
                        out what we do and do not like and, if we discover new interests, it can 
                        potentially result in new passions and goals.
                        <br/>
                        <br/>

                        Self-care encourages self-improvement. It promotes rest and relaxation, which 
                        benefits our overall health and wellness, and it also promotes healthy 
                        relationships. When our self-esteem and self-awareness improve, it has a positive 
                        effect on our overall mindset. This, in turn, enables us to worry for our 
                        friends and loved ones in a very way that we were not as ready to do before.

                        The lack of energy or time are two of the foremost common reasons why we don’t 
                        practice self-care the maximum amount as we want to, but our financial situation 
                        or feelings of selfishness or guilt are contributing factors. Many people are 
                        of the opinion that practicing self-care makes us appear selfish when, in 
                        reality, that's aloof from the reality. We deserve to take care of ourselves.
                        <br></br>
                        <br></br>
                        
                        The tabs explore different parts of wellness and self-care and offer 
                        recommendations on the way to practice these aspects.
                        </p>
                    </Content>
                    </Section>   
                </body>
            </div>
        );
    }
}

export default HeroCard;