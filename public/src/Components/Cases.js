import '../css/cases.css'
import laptopCase from '../img/laptop_case_1.jpg'
import laptopCase2 from '../img/laptop_case_2.jpg'
import statCase from '../img/stat_case.jpg'
import speedCase from '../img/speed_case.jpg'
import monitorCase from '../img/monitor_case.png'


export default function Cases() {
    return (
  <section className="container cases">
    <h2 id="start">Последние кейсы</h2>
    <div className="cases-grid">
      <a className="case-block" href>
        <div className="case-image" style={{backgroundImage: `url(${laptopCase})`}} />
        <h3>Настройка кэширования данных. Апгрейд сервера. Ускорение работы сайта в 30 раз!</h3>
        <div className="case-date">04.05.2020</div>
        <div className="case-text">Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...</div>
      </a>
      <a className="case-block full-screen-case" href>
        <div className="case-image" style={{backgroundImage: `url(${laptopCase2})`}} />
        <h3>Использование отчетов Ecommerce в Яндекс.Метрике</h3>
      </a>
      <a className="case-block full-screen-case" href>
        <div className="case-image" style={{backgroundImage: `url(${statCase})`}} />
        <h3>Повышение конверсии страницы с формой заявки с применением AB-тестирования</h3>
        <div className="case-date">24.01.2020</div>
      </a>
      <a className="case-block full-screen-case" href>
        <div className="case-image" style={{backgroundImage: `url(${speedCase})`}} />
        <h3>Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%</h3>
        <div className="case-date">23.09.2019</div>
      </a>
      <a className="case-block" href>
        <div className="case-image" style={{backgroundImage: `url(${monitorCase})`}} />
        <h3>Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1С: Предприятие, МойСклад, Класс365</h3>
        <div className="case-date">22.08.2019</div>
        <div className="case-text">Опубликован <span className="secret-href">релиз модуля...</span></div>
      </a>
    </div>
    <div className="moreButton"><a href="#start">ПОКАЗАТЬ ЕЩЕ</a></div>
  </section>
)}
