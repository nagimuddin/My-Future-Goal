import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
    return (
        <div className="content-section my-5 text-start">
            
            <Container>
                <Row>
                    <Col>
                        <h1>How React Work?</h1>
                        <p>The react is a librery of Java Script, it's not a fremwork. Which create user interface (UI) in expected and systemetic way by using declaretive code. It is to much usable for building single page application and mobile apps. If you utilies, it you can build complex app too. Usually react creat components by using declaretive code, which is display informatiopn. Components return a react element to declare what should apear on screen and receive a summary input with data or a prop. For creat a complex UI react order a components in logical way. For doing that react use diffrents Hook , Loop and Condition and others. </p>

                        <h1>Diffrents between Proops and State</h1>
                        <p>1. Props are arguments which passed into React components. and State is a plain JavaScript object React used it to represent an information about the current situation of component's.
                            2. Proops passed data from one to another components. other hand, State passed data own components only.
                            3. It is immutable. and Sate is mutable.
                            4. Proops can't be changed. and State changable.
                            5. State and functional components Proops can be use with both. and it's can be used only the class components.
                            6. Proops system  is a only readable. and State reads and write.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Content;