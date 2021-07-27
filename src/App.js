import React from 'react';
import './App.css';
import Questionary from './components/Questionary'
import NewsSub from './components/NewsSub';
import Buttons from './components/Buttons';
import InputItem from './components/Inputs/InputItem';
import SearchPanel from './components/SearchPanel'
import StudentsFilter from './components/StudentsFilter';
const App = () => {
  const button_items = [
    {title: "Нажать", link: "https://design.hse.ru", target: "_blank", type: 0},
    {title: "Нежно", link: "https://design.hse.ru", target: "_self", type: 1},
    {title: "Очень", link: "https://design.hse.ru", target: "_blank", type: 1},
  ]

  const button_items2 = [
    {title: "Тык-тык", link: "https://design.hse.ru", target: "_blank", type: 1},
    {title: "Тыдык-тыдык", link: "https://design.hse.ru", target: "_blank", type: 0},
  ]

  const inputType = {
    label: 'Label', 
    type: 'text', 
    error: true
  }
  
  const button_search = [{title: "Поиск", link: "https://design.hse.ru", target: "_blank", type: 1}];
  const testInfo = [{path:"https://design.hse.ru/vars/146", img: "https://design.hse.ru/system/variations/images/000/000/146/large/1_zr0WvWVfAHI2ajynjqVpfw.jpeg?1608646982", 
                    name: "СВЯТОСЛАВ ИВАНОВ", list_name: `Москва / Никита Бугаев / 1 модуль / ${2}мест`, list_subtitle: 'Цель вариатива — развитие концептуального и образного мышления в ходе работы над проектов собственного монумента, посвященного выбранному событию.',
                    theme: "Массовая культура (1980-2020)"}];  //test
  const testList = [{path:"#", theme: 'Все'}, {path:"#", theme: 'Моушен'}, {path:"#", theme: 'Театр'}]
  return (                                                        
      <div>
        {/* <NewsSub /> */}
        {/* <Questionary/> */}
        <SearchPanel items1={button_items} items2={button_items2} item3={button_search}/>
        <StudentsFilter themeItems={testList} items={testInfo}/>
        {/* <Buttons items={button_items} reversed={true}/> */}
        {/* <Buttons items={button_items2} reversed={false}/> */}
        {/* <br />
        <InputItem />
        <InputItem  valid/>
        <InputItem  valid={false}/> */}
      </div>
  );
}

export default App;
