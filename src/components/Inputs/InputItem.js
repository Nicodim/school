import React from 'react'
import styled from 'styled-components'
import {Input, Label} from './Input'
import { error, InputMargin } from '../Vars/Vars'


const InputWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: ${InputMargin};
`;

const ValidMessage = styled.div`
display: block;
color: ${error};
font-style: Bold;
font-size: 16px;
`;

const InputItem = (props) => {

    return (
       <InputWrapper>
                  <Label hidden={props.hidden} htmlFor={props.name}>{props.label}</Label>
                  <Input 
                  name={props.name} 
                  type={props.type} 
                  valid={props.valid}
                  placeholder={props.placeholder}/>
                  {!props.valid ? <ValidMessage>Это поле не может быть пустым!</ValidMessage> : null}
      </InputWrapper>
    )
}

export default InputItem;
