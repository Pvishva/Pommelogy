import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Card, Container, Row, Col } from 'react-bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Variety.css'
import Banner from '../assets/banner.webp'
import Header from '../components/Header'

const Variety = () => {
  const appleCards = [
    {
      id: 1,
      name: 'Honey Crisp',
      image:
        'https://www.mashed.com/img/gallery/the-real-reason-honeycrisp-apples-are-so-expensive/intro-1602694992.jpg',
    },
    {
      id: 2,
      name: 'Granny Smith',
      image:
        'https://st4prdbebeautiful4s4ci.blob.core.windows.net/www-bebeautiful-in/Heres-why-green-apple-is-the-super-fruit-you-need_mobilehome.jpg',
    },
    {
      id: 3,
      name: 'Gala',
      image:
        'https://media.istockphoto.com/id/1338411615/photo/group-of-gala-apple-on-wooden-board-background-fruits-concept.jpg?s=612x612&w=0&k=20&c=GuHd0Gcew6Fhm4SBGfMz72ZxDKv9Dk6Ni-3i6cJ0mWQ=',
    },
  ]

  const mostViewedApples = [
    {
      id: 1,
      name: 'Gala',
      image:
        'https://meridianfarmmarket.ca/cdn/shop/products/local-gala-apples-2.jpg?v=1655858217',
    },
    {
      id: 2,
      name: 'Granny Smith',
      image: 'https://specialtyproduce.com/sppics/2021.png',
    },
    {
      id: 3,
      name: 'Fuji',
      image:
        'https://us.123rf.com/450wm/bhofack2/bhofack22007/bhofack2200700433/151007575-raw-red-organic-gala-apples-in-a-bunch.jpg?ver=6',
    },
  ]

  return (
    <div className='variety-container'>
      <Header />
      {/* Banner Section */}
      <div className='banner'>
        <img src={Banner} alt='Apple Banner' className='banner-image' />
      </div>

      {/* Apple Cards Section */}
      <Container className='apple-cards-section'>
        <h2>Apple Varieties</h2>
        <Row>
          {appleCards.map((apple) => (
            <Col key={apple.id} xs={12} md={4} lg={3}>
              <Card className='apple-card'>
                <Card.Img
                  variant='top'
                  src={apple.image}
                  alt={apple.name}
                  className='apple-image'
                />
                <Card.Body>
                  <Card.Title>{apple.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Most Viewed Apples Carousel */}
      <Container className='most-viewed-apples-section'>
        <h2>Most Viewed Apples</h2>
        <Carousel>
          {mostViewedApples.map((apple) => (
            <div key={apple.id}>
              <img src={apple.image} alt={apple.name} />
              <p className='legend'>{apple.name}</p>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  )
}

export default Variety
