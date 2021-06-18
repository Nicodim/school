import styled from 'styled-components'
import arrow  from './svg/arrow.svg'
import { active, hover, error, InputMargin} from '../Vars/Vars'

export const Input = styled.input`
/* max-width: 690px; */
width: 100%;
min-height: 60px;
padding: 15px 20px;
border: 1px solid ${hover};
position: relative;
border-color: ${props => !props.valid ? `${error} !important`: `${hover}`};
margin: 0 !important;
outline-offset: 0 !important;
&::before {
    content: '';
    position: absolute;
    width: 15.98px;
    height: 15.98px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
    display: ${props => {
        if(props.type === 'mail') {
            return 'block'
        }else {
            return 'none'
        }
    }}
}
&::after {
    content: "Error message here";
    position: absolute;
    margin: 0;
    padding: 0;
    background-color: red;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    top: 0;
    left: 0;
    display: ${props => {
        if(props.error) {
            return 'block'
        }else {
            return 'none'
        }
    }}
}
&:active,
 :focus {
    outline-color:${props => !props.valid ? `${error}`: `${active}`};
 }
`;

export const Label = styled.label`
    display: ${props=> props.hidden? 'none' : 'block'};
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    margin-bottom: 5px !important;
`;
