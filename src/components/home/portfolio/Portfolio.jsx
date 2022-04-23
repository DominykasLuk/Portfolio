import React from 'react'
import './portfolio.css'
import IMG1 from '../../../assets/portfolio1.jpg'
import IMG2 from '../../../assets/portfolio2.jpg'
import IMG3 from '../../../assets/portfolio3.jpg'
import IMG4 from '../../../assets/portfolio4.jpg'
import IMG5 from '../../../assets/portfolio5.jpg'
import IMG6 from '../../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG3,
    title: 'BLOG',
    github: 'https://github.com',
    demo: '',
  },
  {
    id: 2,
    image: IMG6,
    title: 'STARKSIDA.EU',
    github: 'https://github.com',
    demo: 'https://starksida.eu',
  },
  {
    id: 3,
    image: IMG5,
    title: 'VIVARENT.LT',
    github: 'https://github.com',
    demo: 'https://authentic.lt/',
  },
  {
    id: 4,
    image: IMG1,
    title: 'SIUNTOSINORVEGIJA.LT',
    github: 'https://github.com',
    demo: 'https://siuntosinorvegija.lt/',
  },
  {
    id: 5,
    image: IMG2,
    title: 'VINFOUND.COM',
    github: 'https://github.com',
    demo: 'https://dev.vinfound.com/',
  },
 
  {
    id: 6,
    image: IMG4,
    title: 'POWERAGENCY.LT',
    github: 'https://github.com',
    demo: 'https://poweragency.lt/',
  },


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {/* <a href={github} className='btn' rel='noopener' target='_blank'>Github</a> */}
                  <a href={demo} className='btn btn-primary' rel='noopener noreferrer' target='_blank' >Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio