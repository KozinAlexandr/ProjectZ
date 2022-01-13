import React from 'react'
import '../css/form.css'

export default function Form() {
    return (
      <div className="form-block">
        <form id="form" action="https://formcarry.com/s/cMnbDiM_9Q" method="POST">
          <input name="fname" id="fname" className="footer-form-input" placeholder="Ваше имя" />
          <input name="fnumber" id="fnumber" className="footer-form-input" placeholder="Телефон" />
          <input name="femail" id="femail" type="femail" className="footer-form-input" placeholder="E-mail" />
          <textarea name="fmessage" id="fmessage" placeholder="Ваш комментарий" className="footer-form-input" defaultValue={""} />
          <label htmlFor="fpolicy" className="c_box">
            <input name="fpolicy" type="checkbox" className="cb" id="fpolicy"/>
            <span className="cb_place" />
            <div>
              <span className="checkbox-text">Отправляя заявку, я даю согласие на <a href>обработку своих персональных данных</a>.</span>
            </div>
          </label>
          <div id="recaptcha-store">
            <div id="recaptcha" className="g-recaptcha" data-sitekey="6LcNchkaAAAAAKO7Q6lMTOmiSOdNicwd5Z9iD27H" data-theme="dark" data-callback="captchaCallback" data-expired-callback="captchaCallback">
              <div style={{width: 304, height: 78}}>
                <div>
                  <iframe
                    title="recaptcha"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lfo_jAaAAAAAHmpEUhBfYS5oVoNQkGeWafAHMNG&co=aHR0cHM6Ly9hLm1pa292LmdpdGxhYi5pbzo0NDM.&hl=ru&v=r8jtf1oixV0IGff4hgB4EzDF&theme=dark&size=normal&cb=5oj16yr55nji"
                    width={304} height={78}
                    role="presentation" frameBorder={0} scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                  />
                </div>
                  <textarea id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  className="g-recaptcha-response"
                  style={{width: 250, height: 40, border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: 0, resize: 'none', display: 'none'}}
                  defaultValue={""}
                  />
              </div>
          </div>
          </div>
          <input id="sendButton" type="submit" className="footer-contact-button" value="ОСТАВИТЬ ЗАЯВКУ!" enabled />
        </form>
      </div>
    )}