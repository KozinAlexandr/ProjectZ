import '../css/partnership.css'
import company1 from '../img/big/logo_0.png'
import company2 from '../img/big/logo-estee.png'
import company3 from '../img/big/logo_2.png'
import company4 from '../img/big/logo.png'
import company5 from '../img/big/cableman_ru.png'
import company6 from '../img/big/nashagazeta_ch.png'
import company7 from '../img/big/farbors_ru.jpg'
import company8 from '../img/big/lpcma_rus_v4.jpg'
import Slider from "react-slick";


export default function Carousel () {

    const settings1 = {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint:600,
                settings: {slidesToShow: 2}
            }
        ]
    }

    const settings2 = {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint:600,
                settings: {slidesToShow: 2}
            }
        ]
    }

    return (
        <section className="partnership">
        <h2>С нами работают</h2>
        <div className="partnership-header">
          Десятки компаний доверяют нам самое ценное, что у них есть в интернете
          – свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
        </div>
        <div className="carrousel_wrapper" id="slider-1" style={{ width: "100%" }}>
          <Slider {...settings1}>
            <div className="carrousel_image">
              <div>
                <img src={company1} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company2} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company3} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company4} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company1} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company2} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company3} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company4} alt="Company"/>
              </div>
            </div>
          </Slider>
        </div>
        <div className="carrousel_wrapper" id="slider-2" style={{ width: "100%" }}>
          <Slider {...settings2}>
            <div className="carrousel_image">
              <div>
                <img src={company5} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company6} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company7} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company8} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company5} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company6} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company7} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company8} alt="Company"/>
              </div>
            </div>
          </Slider>
        </div>
      </section>
)}