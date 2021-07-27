import React from 'react'
import styled from 'styled-components';
import { secondary, InputMargin } from '../Vars/Vars'
import Buttons  from '../Buttons';
import {Input} from '../Inputs/Input';
import OptGroup from './OptGroup';
import InputItem from '../Inputs/InputItem'

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

const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & > :first-child {
      flex-grow: 1;
      margin-right: ${InputMargin};
  }
`;

const SearchInput = styled(Input)`
    width: 60%;
    margin-right: 30px !important;
`;

const SelectContainer = styled.div`
display:flex;
`;
const Select = styled.select`
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

const SelectSchool = styled(Select)`
 margin: 0;
 flex-grow: 0;
`;

const SearchPanel= (props) => {
    const {items1, items2, item3} = props;
    return (
        <Search>
            <SearchWrapper>
                <SearchContainer>
                    {/* <SearchInput label='search' name='search' type='search' placeholder='Поиск' valid={true}></SearchInput> */}
                    <InputItem label={'search'} name={'search'} type={'search'} placeholder={'Поиск'} valid={true} hidden={true}/>
                    <Buttons items={item3}/>
                </SearchContainer>
                <SelectContainer>
                    <Select>
                         <option value="" hidden>
                           Все
                         </option>  
                         <OptGroup items={items1} label='Образовательные направления'/>
                         <OptGroup items={items2} label='Прост направления'/>
                    </Select>
                    <SelectSchool>
                         <option value="" hidden>
                           Все
                         </option>  
                         <option value="1">Школа дизайна НИУ ВШЭ — Москва</option>
                         <option value="2">Школа дизайна НИУ ВШЭ — Санкт-Петербург</option>
                         <option value="3">Школа дизайна НИУ ВШЭ — Нижний Новгород</option>
                         <option value="4">Онлайн-бакалавриат</option>
                    </SelectSchool>
                </SelectContainer>
            </SearchWrapper>
        </Search>
    )
}

export default SearchPanel;
