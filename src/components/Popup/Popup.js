import React from 'react'
import axios from 'axios';
import InputItem from '../Inputs/InputItem';
import { ButtonPrimary } from '../Buttons/Button';
import styled from 'styled-components';

const PupupWrapper  = styled.div`
display: flex;
align-items: center;
padding: 25px 40px;
width: 600px;
margin: 0 auto;
margin-bottom: 30px;
flex-direction: column;
border: solid 1px rgba(0,0,0,0.3);
& div {
    width: 100%;
}
`;
const Popup = ()  => {
    return (
        <PupupWrapper>
            <InputItem  name={'uname'} type={'text'} placeholder={'Login'} valid={true} />
            <InputItem  name={'psw'} type={'password'} placeholder={'Password'} valid={true} />
            <ButtonPrimary>Log in</ButtonPrimary>
        </PupupWrapper>
    )
}

export default Popup;
