import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu, Container, Header, Divider, Segment} from 'semantic-ui-react'

class App extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div className="App">
                <Segment inverted className="App-header">
                    <Container textAlign='center'>
                        <Header color={'white'} as='h1' className="App-title">Linux</Header>
                        <p className="App-intro">What is this linux?</p>
                    </Container>
                    <Divider color="white" selection/>
                    <div>
                        <Menu inverted>
                            <Menu.Item
                                name='editorials'
                                active={activeItem === 'editorials'}
                                onClick={this.handleItemClick}
                            >
                                Editorials
                            </Menu.Item>

                            <Menu.Item
                                name='reviews'
                                active={activeItem === 'reviews'}
                                onClick={this.handleItemClick}
                            >
                                Reviews
                            </Menu.Item>

                            <Menu.Item
                                name='upcomingEvents'
                                active={activeItem === 'upcomingEvents'}
                                onClick={this.handleItemClick}
                            >
                                Upcoming Events
                            </Menu.Item>
                        </Menu>
                    </div>

                </Segment>
            </div>

        );
    }
}

export default App;
