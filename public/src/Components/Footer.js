import '../css/footer.css'
import Form from './Form'


export default function Footer() {
    return (
        <footer className="footer-block">
  <div className="container">
    <div id="footer-phrase col-12 col-lg-6">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="contact-recommendation-wrapper">
            <div className="contact-recommendation-title">Оставить заявку на <br /> поддержку сайта</div>
            <div className="contact-recommendation-description">Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!</div>
            <div className="contact-recommendation-contacts">
              <ul>
                <li className="contact-recommendation-phone"><a href>8 800 222-26-73</a></li>
                <li className="contact-recommendation-email"><a href>info@drupal-coder.ru</a></li>
              </ul>
            </div>
          </div>     
        </div>
        <div class="FORM col-12 col-lg-6">
            <Form/>
          </div>
      </div>
      
      <div id="social-info-block-wrapper">
        <div className="social-info-block">
          <div className="social-links">
          </div>
          <p>Проект ООО «Инитлаб», Краснодар, Россия.
            <br />
            Drupal является зарегистрированной торговой маркой Dries Buytaert.
          </p>
        </div>
      </div>
    </div></div></footer>

)}
