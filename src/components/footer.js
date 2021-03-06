import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Footer = props => {

  const testimonials = [
    "My experience with my Mentor was extremely positive - each session was beneficial to my University career and mental health", 
    "I really can't stress enough how helpful my Mentor has been during my final year of University",
    "My Mentor was very open-minded so I wasn't afraid to share my struggles with her, providing a safe and supportive environment", 
    "Words simply cannot describe just how much help my Mentor has been to me",
    "My Mentor often knows exactly the right advice at the right time….  without doubt, I would highly recommend mentoring support"
  ]

  const testimonialSlides = testimonials.map((testimonial, index) => {
    return <p key={index} className="testimonial">{testimonial}</p>
  })

  return (
    <div id="footer">
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        {testimonialSlides}
      </Carousel>
    </div>
  )
}

export default Footer
