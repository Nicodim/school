import React from 'react'
import {ButtonPrimary, ButtonSecondary, ButtonPrimaryReversed, ButtonSecondaryReversed} from './Button'
import styled from 'styled-components'

const Wrapper = styled.div`
 display: flex;
 background-color: ${props => props.reversed? '#17181A' : 'transparent'};
 justify-content: flex-start;
 align-items: center;
`;

const Buttons = ({items, reversed}) => {
      
    let itemsR = items.map((e, i) => {
        if(reversed) {
            if(e.type === 1) {
                return <ButtonPrimaryReversed inverted key={i} link={e.link} target={e.target}>{e.title}</ButtonPrimaryReversed>
            } else {
                return <ButtonSecondaryReversed inverted key={i} link={e.link} target={e.target}>{e.title}</ButtonSecondaryReversed>
            }
        } else {
            if(e.type === 1) {
                return <ButtonPrimary key={i} link={e.link} target={e.target}>{e.title}</ButtonPrimary>
            } else {
                return <ButtonSecondary key={i} link={e.link} target={e.target}>{e.title}</ButtonSecondary>
            }
        }
    })

    return (
        <div>
            {/* <Button>primary</Button><br/>
            <br/>
            <ButtonSecondary>secondary</ButtonSecondary>
            <br/>
            <br/>
            <Button disabled>disabled</Button>
            <br/>
            <br/> */}
                                                                  
            <Wrapper reversed={reversed}>
              {itemsR}
            </Wrapper>
              {/* <Button inverted>primary</Button>
              <ButtonSecondary inverted>secondary</ButtonSecondary> */}                             
        </div>
    )
}

export default Buttons;
