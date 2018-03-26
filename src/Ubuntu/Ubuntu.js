import React, {Component} from 'react';
import './Ubuntu.css';
//import {Button} from 'react-bootstrap';
import {Button , Icon , Container , Header} from 'semantic-ui-react'
import {MediaBox} from 'react-materialize'

class Ubuntu extends Component {
    render() {
        return (
            <div className="Ubuntu">
                <div className="Image"><MediaBox src="http://toplogos.ru/images/logo-ubuntu.png" width="100" height="111"
                                            alt="Ubuntu"/></div>
                <Container text>
                    <Header as='h2'>Ubuntu</Header>
                    <p>
                        Ubuntu — операционная система,
                        основанная на Debian GNU/Linux. Основным разработчиком и спонсором является компания
                        Canonical. В настоящее время проект активно развивается и поддерживается свободным
                        сообществом
                    </p>
                </Container>
                <a href="https://www.ubuntu.com/">
                <div className="button" >
                    <div >
                        <Button color='red' animated='vertical'>
                            <Button.Content visible>Сайт</Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow'/>
                            </Button.Content>
                        </Button>
                    </div>
                </div>
                </a>
            </div>
        )
    }

}
export default  Ubuntu;
