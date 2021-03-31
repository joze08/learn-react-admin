import React from 'react';

import {useHistory} from 'react-router-dom';

import { 
    HeaderContainer,
    Nav,
    OutLogo,
    UserFace,
    List,
    ListElement,
    Link,
    LinkUser
} from '../../styles/HeaderStyle';

import {
    SectionContainer,
    FormBox,
    Title,
    Form,
    Label,
    Input,
    Right,
    LinkSec,
    Button,
    BoxButton,
    Card,
    InsideCard,
    OutsideCard,
    Paragraph
} from '../../styles/SectionStyle';

export default function Login(){

    const history = useHistory()

    return (
        <>
    
            <HeaderContainer>
                <OutLogo>
                    <img 
                        src='/imgs/Logo1.svg'
                        alt='Logo' 
                        width='104' 
                        height='70'
                    />
                </OutLogo>


                <Nav>
                    <List>
                        <ListElement>
                            <Link onClick={() => history.push("/")}>SignIn</Link>
                        </ListElement>
                        <ListElement>
                            <Link onClick={() => history.push("/Login")}>Login</Link>
                        </ListElement>
                    </List>
                </Nav>

                <UserFace>
                    <LinkUser>
                        <img 
                            src='/imgs/Perfil.svg'
                            alt='Perfil' 
                            width='35px' 
                            height='40px'
                        />
                    </LinkUser>
                </UserFace>
            </HeaderContainer>

            <SectionContainer>
            <FormBox>
                <Title>Entrar na sua conta</Title>
                <Form method='POST'>
                    <Label>Email:</Label>
                    <Input type='email' placeholder='Digite seu email'/>

                    <Label>Senha:</Label>
                    <Input type='password' placeholder='Digite sua senha'/>

                    <LinkSec href='/'>Não possui uma conta?</LinkSec>

                    <BoxButton>
                    <Button type='submit'>Entrar</Button> 
                    </BoxButton>
                    

                </Form>
            </FormBox>

            <Right>
                <Card>
                    <InsideCard>
                        <img
                            src='/imgs/Card.svg'
                            alt='Card' 
                            width='356' 
                            height='186'
                        />
                        <Paragraph>
                        Animações em React Native para implementar sua aplicação
                        </Paragraph>
                    </InsideCard>
                    <OutsideCard>
                        <Paragraph>Aprenda animações basicas em React Native que tornarão suas aplicações mais chamativas.</Paragraph>
                    </OutsideCard>
                </Card>
            </Right>
            </SectionContainer>

        </>
    );
}