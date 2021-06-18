import React, { useState } from 'react'
import Spiner from '../Spiner'
const NewsSub = (props) => {
  const [loading, setLoading] = useState(false);
  let success = true;
    return (
        <div className='footer__form'>
            <div className='news__subscribe-wrapper'>
            <div className='container-fluid'>
             <div className='news__subscribe'>
                 <div className='news__subscribe-name'>
                     <h3 className=''>Новости Школы дизайна</h3>
                </div>
          <div className='news__subscribe-form'>
            <form className="news__subscribe-form" action="/subscribe" accept-charset="UTF-8" method="post"><input
                name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token"
                value="+Jteun56Hjv4mRqdOjIE0TIhQ3P8VMW3lUYy9PILRFQUSnQHWi5GuHuwWU77V+xcrgJbRh5vjPzOLF3qtNMGXw==" />
              <input type="hidden" name="list_id" id="list_id" value="2751916243" />
              <input type="hidden" name="sp_list_id" id="sp_list_id" value="755877" />
              <input type="hidden" name="list_tag" id="list_tag" />
              <input name='email' placeholder='Ваша электронная почта' type='text'></input>
              {!loading && <input type="submit" name="commit" value="Подписаться" className="button button__black"data-disable-with="Подписаться" onClick={()=>setLoading(true)}/>}
              {loading && <Spiner/> }
             </form>
            {loading && success && <p className='message'>Спасибо, вы успешно подписаны!</p>}
            {loading && !success && <p className='message'>Извините, что-то пошло не так. Попробуйте позже.</p>}
          </div>
        </div>
      </div>
    </div>

  </div>
    )
}

export default NewsSub;
