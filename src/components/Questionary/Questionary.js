import React, { useState } from 'react';
import logo from './svg/logo.svg';
import Spiner from '../Spiner';
import styled from 'styled-components';
import InputItem  from '../Inputs/InputItem';
import {Input} from '../Inputs/Input';
import { ButtonPrimary } from '../Buttons/Button';
import {gray} from '../Vars/Vars'

const DpoForm = styled.div`
box-sizing: border-box;
`;
const ContainerFluid = styled.div`
width: 100%;
padding: 4rem 9rem;
`;

const DpoFormWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const DpoFormBlock = styled.div`
max-width: 700px;
`;

const FormLogo = styled.a`
max-width: 700px;
color: inherit;
text-decoration: none;
transition: 0.2s;
`;

const FormSendText = styled.div`
text-transform: uppercase;
font-size: 1.6rem;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: 1.46;
letter-spacing: normal;
`;

const JsForm = styled.form`

`;

const FormName = styled.div`

`;

const FormRights = styled.div`
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.71;
letter-spacing: normal;
color: ${gray};
box-sizing: inherit;
& a {
    transition: 0.2s;
    text-decoration: none;
    color: #0050CF;
}
`;

const Questionary = (props) =>{
    const [loading, setLoading] = useState(false);
    // let success = true;

    return (
<DpoForm>
    <ContainerFluid>
        <DpoFormWrap>
            <DpoFormBlock>
                <FormLogo  href='http://design.hse.ru/'>
                    <h1>
                        <img src={logo} alt="img"></img>
                    </h1>
                </FormLogo>
                <FormSendText>
                    Отправить заявку
                </FormSendText>
                <JsForm id="new_consultation_request"
                    data-program-ty-link="http://design.hse.ru/dop/programs/186/thank-you"
                    action="/consultation_requests" accept-charset="UTF-8" method="post">
                        <Input name="utf8"
                        type="hidden" value="&#x2713;" />
                        <Input type="hidden" name="authenticity_token"
                        value="LTB/MUrsXsJ0VOMC0Bi6vqm2mfaQwaVvg8JR22tTazLB4VWMbrgGQfd9oNERfVIzNZWBw3L67CTYqD7FLYspOQ==" />
                    <FormName>
                        <h4>Профессия: Дизайнер. Онлайн-курс</h4>
                    </FormName>
                    <Input type="hidden" name="direction" id="direction" value="38" />
                    <Input type="hidden" name="target_id" id="target_id" value="186" />
                    <Input type="hidden" name="target_type" id="target_type" value="0" />
                    <Input type="hidden" name="ga_id" id="ga_id" value="1842842793.1611564018" />
                    <Input type="hidden" name="utm_source" id="utm_source" />
                    <Input type="hidden" name="utm_medium" id="utm_medium" />
                    <Input type="hidden" name="utm_campaign" id="utm_campaign" />
                    <Input type="hidden" name="utm_content" id="utm_content" />
                    <div class='form__input'>
                        <InputItem label={'Имя'} name={'name'} type={'text'} placeholder={'Игорь Олегович Федосеев'} valid={false} hidden={false}/>
                        <InputItem label={'Телефон'} name={'phone'} type={'tel'} placeholder={'+7 ___ __-__-___'} valid={true} />
                        <InputItem label={'Электронная почта'} name={'email'} type={'email'} placeholder={'mail@examp.le'} valid={true} />
                        <div>
                        {!loading && <div class='buttons buttons__form'>
                            <ButtonPrimary as="input" name='btn' type='submit' value='Отправить заявку' onClick={()=>setLoading(true)}/>
                        </div>}
                        {loading && <Spiner/> }
                        </div>
                        {/* {success && <p className='message'>Спасибо, вы успешно подписаны!</p>}
                        { !success && <p className='message'>Извините, что-то пошло не так. Попробуйте позже.</p>} */}
                        <FormRights>
                            Отправляя заявку, я соглашаюсь на обработку персональных данных в соответствии с пунктом 3.7
                            <a href='https://www.hse.ru/data_protection_regulation'>
                                Положения НИУ ВШЭ
                            </a>
                        </FormRights>
                    </div>
                </JsForm>
            </DpoFormBlock>
        </DpoFormWrap>
   </ContainerFluid>
</DpoForm>
    )
}

export default Questionary;
