import styled from 'styled-components';

export const SectionContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 7rem;
    font-family: Arial;
    box-sizing: border-box;
`;

export const SectionContainerPriv = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 7rem;
    font-family: Arial;
    box-sizing: border-box;

    justify-content: center;
    align-items: center;
`;

export const FormBox = styled.div`
    background-color: #3F94AB;
    border-radius: 10px;
    width: 30%;
    margin-top: 3rem;
    padding: 3rem;
    padding-right: 3.2rem;
`;

export const FormBoxPriv = styled.div`
    background-color: #3F94AB;
    border-radius: 10px;
    width: 50%;
    margin-top: 3rem;
    padding: 3rem;
    padding-right: 3.2rem;
`;

export const Title = styled.h1`
    text-align: center;
    margin: .6rem;
    margin-top: 0;
    font-size: 1.8rem;
    color: white;
`;

export const Form = styled.form`
    display: block;
    margin-top: 0em;
`;

export const Label = styled.label`
    display: block;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: .2rem;
    color: white;
`;

export const Input = styled.input`
    border: none;
    border-radius: 5px;
    padding: .5rem;
    font-size: 1rem;
    display: block;
    width: 100%;
`;

export const LinkSec = styled.a`
    text-align: right;
    font-size: .8rem;
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

export const Button = styled.button`
    font-weight: bold;
    color: #3F94AB;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
    width: 75%;
    text-align: center;
    margin-top: 2.6rem;
    font-size: 1.4rem;
    border: none;
    border-radius: 7px;
    padding: .6rem;
    cursor: pointer;
    &:hover{
        background-color: rgb(200, 200, 200);
    }
`;
//======================================================================
export const Right = styled.div`

`;

export const Card = styled.div`
    width: 356px;
`;

export const InsideCard = styled.div`
    background-color: white;
    border-radius: 5px;
`;

export const Paragraph = styled.p`
    padding: 4%;
`;

export const OutsideCard = styled.div`
    display: block;
`;

//=======================================================================
export const BoxButton = styled.div`
    text-align: center;
    display: block;
`;



//==========================================================================

export const TextArea = styled.textarea`
    border: none;
    border-radius: 5px;

    width: 100%;
    height: 10vw;
    margin-top: .5rem; 

    resize: none;
    font-size: 16px;
`;


