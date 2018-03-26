import React, {Component} from 'react';
import './Debian.css';
import EffectContainer, {Effects} from 'react-magic-effects';
//import {Button} from 'react-bootstrap';
import {Button, Icon, Container , Header, Reveal} from 'semantic-ui-react'

class Debian extends Component {
    render() {
        return (
            <div  className="Debian">
                <div className="Image"><img src="http://toplogos.ru/images/logo-debian.png" width="100" height="111"
                                            alt="Debian"/></div>
                <Container text>
                    <Header as='h2'>Debian</Header>
                    <p>
                        Debian — операционная система, состоящая из свободного ПО с открытым исходным кодом. В
                    настоящее время Debian GNU/Linux — один из самых популярных и важных дистрибутивов GNU/Linux[11], в
                    первичной форме оказавший значительное влияние на развитие этого типа ОС в целом[12]. Также
                    существуют проекты на основе других ядер: Debian GNU/Hurd, Debian GNU/kFreeBSD и Debian
                    GNU/kNetBSD[13]. Debian может использоваться в качестве операционной системы как для серверов, так и
                    для рабочих станций[⇨].

                    Debian имеет наибольшее среди всех дистрибутивов хранилище пакетов[14] — готовых к использованию
                    программ и библиотек, — и если даже не по их числу, то по числу поддерживаемых архитектур[⇨]:
                    начиная с ARM, используемой во встраиваемых устройствах, наиболее популярных x86-64 и PowerPC, и
                    заканчивая IBM S/390, используемой в мейнфреймах. Для работы с хранилищем разработаны разные
                    средства, самое популярное из которых — Advanced Packaging Tool (APT).

                    Debian стал основой целого ряда дистрибутивов[⇨]. Самые известные из них (в алфавитном порядке) —
                    Knoppix, Linux Mint, Maemo, MEPIS, SteamOS, TAILS, Ubuntu.

                    Название «Debian» составлено из имён основателя проекта Яна Мёрдока (Ian Murdock) и его подруги
                    (впоследствии — жены, ныне — бывшей) Дебры Линн (Debra Lynn).
                    </p>
                </Container>
                <div className="site">
                <a href="https://www.debian.org/index.ru.html">
                    <div className="button">
                        <div >
                            <Button.Content>
                                <Button color='red' animated='vertical'>
                                    <Button.Content visible>Сайт</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='right arrow'/>
                                    </Button.Content>
                                </Button>
                            </Button.Content>

                        </div>
                    </div>
                </a>
                </div>
            </div>
        )
    }

}
export default  Debian;
