import React from 'react';
import Global from 'Global';
import lc from './locales';

import './index.css';

import portfolio from './data';

import formatDate from 'fn/format-date';

class Portfolio extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
  }

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);
    return (
      <section id="portfolio">
        <h5>{lc.h5}</h5>
        <h2>{lc.h2}</h2>

        <div className="container portfolio__container">
          { portfolio.map((item, i) => <PortfolioItem key={i} item={item} />) }
        </div>
      </section>
    );
  }
  
}

class PortfolioItem extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
    // this.shortDescription = this.shortDescription.bind(this);
    // this.formatDate = this.formatDate.bind(this);
  }

  render() {
    const { ln } = this.context;
    const { item } = this.props;
    const { 
      title, 
      description, 
      customer,
      country,
      date,
      preview, 
    } = item;
    return (
      <article className='portfolio__item' onClick={ () => this.showModalBox({ ...item }) }>
        <div className="portfolio__item-image">
          <img src={preview}  alt="lan-optic-1" />
        </div>
        <h3>{title}</h3>
        <p className="portfolio__item-info">
          <span className={`portfolio__item-country fi fi-${ country }`}></span> 
          <span className={'portfolio__item-customer'}>{ customer }</span>
          <span className={'portfolio__item-date'}>{ date ? formatDate(date, ln) : null }</span>
        </p>
        <div className='portfolio__item-description'>
          { description }
        </div>
      </article>
    );
  }

  showModalBox(obj) {
    const detail = Object.assign({}, obj)
    const event = new CustomEvent('modal-box', { detail });
    document.dispatchEvent(event);
  }
}

export default Portfolio;
