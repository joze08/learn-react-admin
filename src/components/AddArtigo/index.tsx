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
    LinkUser,
} from '../../styles/HeaderStyle';

import {
    SectionContainerPriv,
    FormBoxPriv,
    Title,
    Form,
    Label,
    Button,
    BoxButton,
    TextArea
} from '../../styles/SectionStyle';

export default function ReadArtigo(){
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
                            <Link onClick={() => history.push("AppPages/AddArtigos")}>Add Artigo</Link>
                        </ListElement>
                        <ListElement>
                            <Link onClick={() => history.push("AppPages/ReadArtigos")}>Artigos</Link>
                        </ListElement>
                        <ListElement>
                            <Link onClick={() => history.push("AuthPages/Login")}>Logout</Link>
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

            <SectionContainerPriv>
            <FormBoxPriv>
                <Title>Poste um novo artigo</Title>
                <Form method='POST'>
                    <Label>Digite o artigo:</Label>
                    <TextArea></TextArea>

                    <BoxButton>
                    <Button type='submit'>Enviar</Button> 
                    </BoxButton>
                    

                </Form>
            </FormBoxPriv>
            </SectionContainerPriv>

        </>
    );
}