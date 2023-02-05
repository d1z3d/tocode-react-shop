import React from 'react'
import { Link } from 'react-router-dom'

// carousel:
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

// components:
import { Container } from 'layouts'

// data:
import products from 'seeders/products'

const HomePage = () => {
  return (
    <Container>
      <Carousel
        showArrows
        // autoPlay
        // infiniteLoop
        emulateTouch
        showThumbs={false}
      >
        {products.map((item) => (
          <div className='flex items-center justify-center' key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              style={{ maxWidth: '320px' }}
            />
            <div className='flex flex-col items-start'>
              <span className='ui-title-3 mb-2'>{item.title}</span>
              <span className='mb-4'>{item.price}</span>
              <Link to={`/products/${item.alias}`}>
                <div className='ui-button isPrimary'>See more</div>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </Container>
  )
}

export default HomePage
