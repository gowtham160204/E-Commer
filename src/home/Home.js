import React from 'react'
import Header from '../project/commen/Header'
import { TfiSearch } from "react-icons/tfi";
import './Home.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCartDownload } from "react-icons/bi";
import img2 from "../project/commen/images/image 3.jpg"
import img1 from "../project/commen/images/images 3.jpeg"
import img3 from "../project/commen/images/image1.jpg"
import img4 from "../project/commen/images/image4.jpeg"
import img5 from "../project/commen/images/images5.jpeg"
import img6 from "../project/commen/images/image6.png"
import img7 from "../project/commen/images/image7.jpg"
import img8 from "../project/commen/images/image8.jpg"
import img9 from "../project/commen/images/image9.jpg"
import img10 from "../project/commen/images/image11.png"
import img11 from "../project/commen/images/image12.jpg"
import img12 from "../project/commen/images/image13.jpg"
import { Link } from 'react-router-dom';

function Home() {

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='mbdy'>
               <div className='body'>
                <Header/>
                   <div className='sep'><h1><TfiSearch /></h1><input className='search' placeholder='search'></input> <div className='crt'> <Link to={"/c"}><BiCartDownload /></Link></div></div>
               </div>
          <div className='hti'><h3 className='htih3'> Welcome to </h3><h1 className='htih1'> Cart World </h1></div>
        <div></div>
        <Slider {...settings}>
      <div>
      <div className='ban'><img src={img6} className='im1'></img></div>
        <h3>1</h3>
      </div>
      <div className='slide2'>
      <div className='ban'><img src={img2} className='im1'></img></div>
        <h3>2</h3>
      </div>
      <div>
      <div className='ban'><img src={img3} className='im1'></img> </div>  
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
    </Slider>
    <div> 
      <div className='cardbox'>

        <div className='card'><img src={img4} className='img'></img></div> <div className='card'><img src={img5} className='img'></img></div> <div className='card'><img src={img6} className='img'></img></div>
        <div className='card'><img src={img7} className='img'></img></div> <div className='card'><img src={img8} className='img'></img></div> <div className='card'><img src={img9} className='img'></img></div>
        <div className='card'><img src={img10} className='img'></img></div>
      </div>
      <div className='cardbox1'>

        <div className='card'><img src={img11} className='img'></img></div> <div className='card'><img src={img12} className='img'></img></div> <div className='card'><img src={img3} className='img'></img></div>
        <div className='card'><img src={img4} className='img'></img></div> <div className='card'><img src={img8} className='img'></img></div> <div className='card'><img src={img9} className='img'></img></div>
        <div className='card'><img src={img10} className='img'></img></div>
      </div>
      {/* <div className='cardbox1'>

        <div className='card'><img src={} className='img'></img></div> <div className='card'><img src={} className='img'></img></div> <div className='card'><img src={} className='img'></img></div>
        <div className='card'><img src={} className='img'></img></div> <div className='card'><img src={} className='img'></img></div> <div className='card'><img src={} className='img'></img></div>
        <div className='card'><img src={} className='img'></img></div>
      </div>
      <div className='cardbox1'>

        <div className='card'><img src={} className='img'></img></div> <div className='card'><img src={} className='img'></img></div> <div className='card'><img src={} className='img'></img></div>
        <div className='card'><img src={} className='img'></img></div> <div className='card'><img src={} className='img'></img></div> <div className='card'><img src={} className='img'></img></div>
        <div className='card'><img src={} className='img'></img></div>
      </div> */}
    </div>
    </div>
  )
}

export default Home