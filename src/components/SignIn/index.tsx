import React from 'react';

import {useHistory} from 'react-router-dom';
import {apiUser} from 'api/data';
import { useForm } from 'react-hook-form';


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
import { useCallback } from 'react';
import { error } from 'node:console';
import { IUserRegister } from 'interfaces/User.interface';

export default function SignIn(){

    const history = useHistory()

    const {handleSubmit, register} = useForm();
    
    const handleSignIn = useCallback(
        async(data: IUserRegister) => {
            console.log(data);
            
            try{
                await apiUser.register(data)
                history.push("/Login")
            } catch (error){
                window.alert(error)
            }
        },[history]
    );
    
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
                <Title>Crie sua conta</Title>
                <Form onSubmit={handleSubmit(handleSignIn)}>
                    <Label>Nome:</Label>
                    <Input type='text' placeholder='Digite seu nome' ref={register({required: true}) } required/>

                    <Label>Email:</Label>
                    <Input type='email' placeholder='Digite seu email' ref={register({required: true}) } required/>

                    <Label>Senha:</Label>
                    <Input type='password' placeholder='Digite sua senha' ref={register({required: true}) } required/>

                    <LinkSec href='/Login'>Já possui uma conta?</LinkSec>

                    <BoxButton>
                    <Button type="submit" title="Sign In">Cadastre-se</Button> 
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