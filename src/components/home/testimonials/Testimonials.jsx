import './testimonials.css'
import AVTR1 from '../../../assets/avatar1.jpg'
import AVTR2 from '../../../assets/avatar2.jpg'
import AVTR3 from '../../../assets/avatar3.jpg'
import AVTR4 from '../../../assets/avatar4.jpg'
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    avatar: AVTR1,
    name: 'Neringa Arnašiūtė',
    review: 'Professionally executed project. We look forward to excellent cooperation. All issues were resolved as soon as they arose. If you have to face the need for a similar service again - no more questions about where to go. Recommended for anyone looking for a specialist in their field. '
  },
  {
    avatar: AVTR2,
    name: 'Simutė Jankauskaitė',
    review: 'Great website development specialist! All our wishes were realized, everything was fully worked out. It was easy to communicate and we got a lot of advice! If I still needed these services I would definitely pick this person again!'
  },
  {
    avatar: AVTR3,
    name: 'Siuntų Bitė',
    review: 'Work is done quickly and at a good price. 5 stars for Dominykas'
  },
  {
    avatar: AVTR4,
    name: 'Aurelija Dumbliauskaitė',
    review: 'A man well versed in his work, fulfilled all desires down to the smallest detail! The work was done very quickly, we are happy with the amazing result, should I contact this person again! I recommend all 100%!'
  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        pagination={{ clickable: true }} modules={[Pagination]}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="">
                  <div className="client__avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials