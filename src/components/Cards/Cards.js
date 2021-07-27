import React, { Fragment } from 'react'
import styled from 'styled-components';
import { ButtonPrimary, ButtonSecondary } from '../Buttons/Button'

const CardContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1440px;
    display: ${props => props.list? 'flex': 'block'};
`;

const CardWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin: 0 auto;
margin-bottom: 3.75rem;
padding-bottom: ${props=>props.list? '2rem' : 0};
border-bottom: ${props=>props.list? 'solid 2px #000000' : 'none'};
`;

const ImgContainer = styled.div`
flex: 0 0 33.33333%;
max-width: 33.33333%;
padding-right: 15px;
height: 300px;
& a {
    box-sizing: border-box;
    text-decoration: none ;
}
img {
    width: 100%;
    height: 100%;
}
`
const TitleLink = styled.a`
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    & :hover {
        text-decoration: none; 
        background-color: transparent;
    }
`
const ContentInfo = styled.div`
flex: 0 0 66.66667%;
max-width: 66.66667%;
padding-right: 15px;
padding-left: 15px;
& strong {
    font-weight: bold;
    font-family: "HSE Sans";
    font-size: 1rem;
}
h4 {
    font-family: 'HSESansRegular';
    font-size: 2.5rem;
    font-weight: normal;
    line-height: 1.19;
    color: #17181a;
    letter-spacing: normal;
    text-transform: none;
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: ${props=>props.list? '0.625rem': '2.5rem'};
}
`
const StrongWrapper = styled.div`
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.5;
letter-spacing: normal;
text-transform: uppercase;
margin-bottom: 9px;
`
const Subtitle = styled.div`
font-size: 1.6rem;
margin-bottom: 2.5rem;
`
const CardBlock = styled.div`
flex: 0 0 83.33333%;
max-width: 83.33333%;
h4 {
    font-family: 'HSESansRegular';
    font-size: 2.5rem;
    font-weight: normal;
    line-height: 1.19;
    color: #17181a;
    letter-spacing: normal;
    padding-bottom: 3rem;
    margin-bottom: 2.5rem;
    border-bottom: solid 2px #000000;
    text-transform: uppercase;
}
`
const ListBlock = styled.div`
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
    padding-right: 15px;
    padding-left: 15px;
h4 {
    font-family: 'HSESansRegular';
    font-size: 2.5rem;
    font-weight: normal;
    line-height: 1.19;
    color: #17181a;
    letter-spacing: normal;
    padding-bottom: 3rem;
    border-bottom: solid 2px #000000;
    text-transform: uppercase;
}
`
const ThemeWrapper = styled.ul`
list-style: none;
padding: 0;
`
const ThemeItem = styled.li`
a {
    text-decoration: none;
    display: block;
    font-size: 1.3rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #17181a;
    border-bottom: solid 1px rgba(0,0,0,0.3);
    padding-top: 20px;
    padding-bottom: 20px;
    transition: 0.2s;
}
`

const Cards = ({items, list, themeItems})  => {

    let item = items.map((e,i) => {
        return (
            <CardWrapper list={list} key={i}>
                <ImgContainer>
                     <a href={e.path}>
                     {e.img? <img src={e.img} alt="img"/> : null }
                    </a>
                </ImgContainer>

                <ContentInfo list={list}>
                    <StrongWrapper>
                        <strong>{list? e.list_name : e.name}</strong>
                    </StrongWrapper>
                    <TitleLink href={e.path}>
                       <h4> 
                           {e.theme} 
                       </h4>
                    </TitleLink>
                    {list? <Subtitle>{e.list_subtitle}</Subtitle> : null}
                    {list? <Fragment><ButtonPrimary>Записаться</ButtonPrimary><ButtonSecondary>Подробнее</ButtonSecondary></Fragment>: <ButtonSecondary>Подробнее</ButtonSecondary>} 
                </ContentInfo>
            </CardWrapper>
        )
    })

    let listItem = themeItems.map((e,i)=> {
        return (
            <ThemeItem key={i}>
                <a href={e.path}>
                    {e.theme}
                </a>
            </ThemeItem>
        )
    })

    return (
        <CardContainer list={list}>
            {list && 
                <Fragment>
                    <CardBlock>
                        <h4>Cписок вариантов</h4>
                        {item}
                    </CardBlock>
                    <ListBlock>
                        <h4>Темы</h4>
                        <ThemeWrapper>
                            {listItem}
                        </ThemeWrapper>
                    </ListBlock>
                </Fragment>
                }
             {!list && item}
        </CardContainer>
    )
}

export default Cards;
