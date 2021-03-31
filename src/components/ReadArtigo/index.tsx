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
    UserImage,
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
                </UserFace>
            </HeaderContainer>

            <SectionContainer>
                <FormBox>
                    aaaaaaaaaaaaa
                </FormBox>
            </SectionContainer>

        </>
    );
}