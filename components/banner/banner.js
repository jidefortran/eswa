
import React from 'react';
import Carousel from 'nuka-carousel';
import Image  from 'next/image';
import slide1 from '/static/wheel.jpg'
import slide2 from '/static/slide2.jpg'

  export default class Banner extends React.Component {
    render(){
  return (
    <Carousel>
      <Image src={slide1} />
      <Image src={slide2}/>
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
    </Carousel>
  )
  }
}
//export default Banner


