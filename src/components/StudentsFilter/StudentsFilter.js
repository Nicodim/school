import React from 'react'
import styled from 'styled-components'
import { secondary } from '../Vars/Vars'
import Cards from '../Cards';

const Search = styled.section`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: ${secondary};
    margin-bottom: 3.75rem;
`;
const SearchWrapper = styled.div`
    padding-left: 9rem;
    padding-right: 9rem;
    max-width: 1440px;
    margin: 0 auto;
`;

const SelectContainer = styled.div`
display:flex;
`;

const SelectThemes = styled.select`
border: none;
flex-grow: 1;
border-bottom: 2px solid #17181a;
padding-left: 0;
padding-right: 0;
white-space: initial;
background-color: ${secondary};
background-position: center right 0px;
margin: 0;
margin-right: 15px;
&:active,
:focus {
    outline: none !important;
}
`;

const SelectСourse = styled(SelectThemes)`

`;

const StudentsFilter = (props) => {
    const {items, themeItems} = props;
    return (
        <div>
        <Search>
            <SearchWrapper>
            <SelectContainer>
                    <SelectСourse>
                        <option value="0">
                            Все линейки
                        </option>  
                        <option value="1">2 курс - I поток - 1 линейка</option>
                        <option value="2">2 курс - I поток - 2 линейка</option>
                        <option value="3">2 курс - II поток - 1 линейка</option>
                        <option value="4">2 курс - II поток - 2 линейка</option>
                        <option value="4">3 курс - 1 линейка</option>
                        <option value="4">3 курс - 2 линейка</option>
                    </SelectСourse>
                    <SelectThemes>
                         <option value="0">
                           Все темы
                         </option>  
                         <option value="1">Коммуникационный дизайн</option>
                         <option value="2">Дизайн среды</option>
                         <option value="3">Дизайн и реклама</option>
                         <option value="4">Иллюстрация и комикс</option>
                         <option value="4">Мода</option>
                    </SelectThemes>
                </SelectContainer>
            </SearchWrapper>
        </Search>
        <Cards themeItems={themeItems} topic={true} items={items}/>
        </div>
    )
}

export default StudentsFilter
