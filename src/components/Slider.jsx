import React from 'react'
import { Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Slider = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./imgg/first.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Форма обратной связи</h3>
        <p>Заполнить</p>
        <Link exact to={'/form'}>
        <Button variant="primary">
        Отправить
        </Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./imgg/third.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./imgg/second.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider