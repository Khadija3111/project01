

    import React from 'react';
import pic1 from "../assets/home.jpg";
import pic5 from "../assets/about_nadra.png";
import pic2 from "../assets/succession-1.jpg";
import pic3 from "../assets/PAO.jpg";
import pic4 from "../assets/home.png";
import pic6 from "../assets/1.png";
// import styles from "./Home.css"
import "./home.css";
 

function Home() {
  return (
   
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={pic1} id='big' class="d-block w-100" alt="1"/>
      <img src={pic4} class="small" alt="4" />
     
    </div>
    <div class="carousel-item sec" data-bs-interval="2000">
      <img src={pic2} id='big'  class="d-block w-100" alt="2"/>
      <img src={pic5}  class="small " alt="5" />
      <p class="image-text">Register for NIC Online</p> 
    </div>
    <div class="carousel-item thi">
      <img src={pic3} id='big' class="d-block w-100" alt="3"/>
      <img src={pic6} class="small " id='smalll' alt="6" />
      <p class="image-text">Manage your Data</p> 
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
//     <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="10000">
//       <img src={pic1} class="d-block w-100" alt="1"/>
//       <img src={pic4}  class="small" alt="4"  />
//     </div>
//     <div class="carousel-item sec" data-bs-interval="2000">
//       <img src={pic2} class="d-block w-100" alt="2"/>
     
//       <img  src={pic5}  class='small2' alt='5'   /> 
      
//     </div>
//     <div class="carousel-item thi">
//       <img src={pic3}class="d-block w-100" alt="3"/>

//       <img  src={pic6}  class='small3' alt='6'   />
      
      
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
  );
}

export default Home;

  

