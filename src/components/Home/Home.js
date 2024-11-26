import React from 'react';
import DrMonty from '../../Images/DrMonty.jpg';
import '../../App.css';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Home(props) {
  return <div class="container">
    <div class="row">
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-50-px"
>
  <div>
    <Link to={"/Blog"}>
      <h1>
        Check out our Blog
      </h1>
    </Link>
    <br/>
  </div>
  <div>
    <Link to={"/Products"}>
      <h1>
        Now Introducing Cans 
      </h1>
    </Link>
    <br/>
  </div>
  <div>
    <Link to={"/Product2"}>
      <h1>
        Improved Recipe: 
      </h1>
      <h1>Double Tap II</h1>
    </Link>
    <br/>
  </div>
  <div>
    <Link to={"/Creator"}>
      <h1>
        Become an affiliate
      </h1>
    </Link>
    <br/>
  </div>
  <div>
    <Link to={"/Chat"}>
      <h1>
        Chat with us
      </h1>
    </Link>
    <br/>
  </div>
</Carousel>;
    </div>
    <div class="row">
      <div class="col-md">
        <h2>
        Who is Dr Monty?
      </h2>
      <img src={DrMonty}/>
      <p class="text">
      Dr. Monty is the member of the Keepers who were unaffected by the corrupted energy from the Dark Aether,
       and defeated their corrupted brethren. 
       His role in the war is unknown, 
       but was one of the powerful member in his species, 
       likely leading them to victory.
      </p>
      </div>
      <div class="col-md">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cvArR7CFXLs?si=XR9Dum4UmaVLG2Z_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>;
}

export default Home;
