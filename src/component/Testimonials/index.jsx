import React from 'react';
import Global from 'Global';

// SwiperJS
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './index.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import data from './data';
import lc from './locales';

// import stars from 'assets/img/stars.svg';

import formatDate from 'fn/format-date';

class Testimonials extends React.Component {
  static contextType = Global;

  render() {
    const pagination = { clickable: true }
    const autoplay = { delay: 2500, disableOnInteraction: true }
    const { ln } = this.context;
    lc.setLanguage(ln);
    return (
      <section id='testimonials'>
        <h5>{ lc.h5 }</h5>
        <h2>{ lc.h2 }</h2>

        <div className="container container__testimonials">
          <p className="container__testimonials-description">
            { lc.formatString(lc.description, <b>UpWork</b>) }
          </p>
          <Swiper 
            modules={[Pagination, Autoplay]}
            className="container__testimonials-swiper"
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ ...pagination }}
            autoplay={{ ...autoplay }}
            loop={true}
          >
            {
              data.map((testimonial, index) => 
                this.renderItem(testimonial, index))
            }
          </Swiper>
          <br />
          <p className="container__testimonials-description">
            Недавно я решил собирать отзывы о своей работе в открытом Telegram-чате:
          </p>
          <div className="tg-script-wrapper"></div>
        </div>

        

      </section>
    );
  }

  componentDidMount() {
    this.renderTgWidget();
  }

  renderTgWidget() {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?21";
    script.async = true;
    script.setAttribute("data-telegram-post", "lazarev_testimonials/5");
    script.setAttribute("data-width", "100%");
    script.setAttribute("data-userpic", "true");
    // script.setAttribute("data-color", "343638");
    // script.setAttribute("data-dark", "1");
    // script.setAttribute("data-dark-color", "FFFFFF");
    const wrapper = document.querySelector(".tg-script-wrapper");
    wrapper.appendChild(script);

    // <script 
    //   async 
    //   src="https://telegram.org/js/telegram-widget.js?21" 
    //   data-telegram-post="lazarev_testimonials/5" 
    //   data-width="100%" 
    //   data-userpic="true" 
    //   data-color="343638" 
    //   data-dark="1" 
    //   data-dark-color="FFFFFF"></script>
  }

  renderItem(testimonial, index) {
    const { name, img, country, date, review, grade } = testimonial;
    const { ln } = this.context;
    return(
      <SwiperSlide key={index} className="testimonial">
        <div className="testimonial__top">
          <div className="client__avatar-wrapper">
            <div className="client__avatar">
              {
                img 
                  ? <img src={img} alt="" /> 
                  : <div className='client__avatar-XX'>{ this.getInitials(name) }</div>
              }
            </div>
            {
              country
                ? <span className={`fi fi-${country}`}></span>
                : null
            }
          </div>
          <div className="client__info">
            <h5 className="client__name">{name}</h5>
            <span className="client__date">
              {
                date ? formatDate(date, ln) : null
              }
            </span>
            <div className="client__grade">
              <div className="client__grade-bg">
                <div 
                  className="client__grade-bg-blue"
                  style={{
                    width: `${grade * 20}%`,
                  }}
                ></div>
              </div>
              <div className="client__grade-number">
                { grade.toPrecision(3) }
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__bottom">
          <small className='client__review'>{review}</small>
        </div>
      </SwiperSlide>
    );
  }

  getInitials(name) {
    const regex = /^([A-ZА-Я]).* ([A-ZА-Я]).*$/;
    const found = name.match(regex);
    if (found) return found[1] + found[2];
    else return "";
  }
}

export default Testimonials;
