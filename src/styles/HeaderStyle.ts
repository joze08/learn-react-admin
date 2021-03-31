import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #3F94AB;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 1.20rem;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
`;

export const OutLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;

//===========================================================================================================

export const Nav = styled.nav`
  width: 45%;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: block;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  padding: 0;
`;

export const ListElement = styled.li`
  display: inline-block;
  margin: 0px 15px 0px;
`;

export const Link = styled.a`
  text-align: center;
  color: white;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover{
        text-decoration: underline;
    }
`;

//===========================================================================================================

export const UserFace = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  
`;

export const LinkUser = styled.a`
  margin-right: 20px
`;

export const UserImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;