import React from 'react';
import DrMonty from '../../Images/DrMonty.jpg';


function Home() {
  return <div>
    <div class="row">
      Carosaul
    </div>
    <div class="row">
      <div class="col-md">
        <h2>
        Who is Dr Monty?
      </h2>
      <img src={DrMonty}/>
      </div>
      <div class="col-md">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/u9aW0mYoJP8?si=1t_XEp8utJz5G3n-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>;
}

export default Home;
