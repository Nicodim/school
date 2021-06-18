import styled from 'styled-components'
import {black, disablet, white, secondary, active, hover} from '../Vars/Vars'

// export const white = '${white}';

export const Button = styled.button`

font-family: HSE Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: 2px;
text-transform: uppercase;
border: none;
padding: 20px 50px;
margin: 0;
margin-left: 0;
margin-bottom: 0;
cursor: pointer;
transition: 0.2s all;
box-sizing: border-box;
&:hover {
 background-color: ${hover};
 color: ${black};
}

&:active,
 :focus {
background-color: ${active};
color: ${white};
border: 0;
padding: 20px 50px;
outline: none;
}

&:disabled,
 [disabled] {
background-color: ${disablet};
color: ${white};
}
`;

export const ButtonPrimary = styled(Button)`
background-color: ${black};
color: ${white};
`;

export const ButtonSecondary = styled(Button)`
background-color: ${secondary};
color: ${black};
border: 2px solid ${secondary};
padding: 18px 48px;
/* transition: none; */
&:hover { 
    border: 2px solid ${hover};
    padding: 18px 48px;
}
&:active,
 :focus {
background-color: ${white};
color: ${black};
border: 2px solid ${black};
padding: 18px 48px;
}
`;

export const ButtonPrimaryReversed = styled(ButtonPrimary)`
background-color: ${white};
color: ${black};
`;

export const ButtonSecondaryReversed = styled(ButtonSecondary)`
background-color: transparent;
color: ${white};
padding: 18px 48px;
border: 2px solid ${white};
/* transition: none; */
&:hover { 
    border: 2px solid ${black};
    padding: 18px 48px;
}
&:active,
 :focus {
    border: 2px solid ${white};
    padding: 18px 48px;
 }
`;