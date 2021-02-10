import React from "react";
import { Carousel } from "../component";

import "../css/Project.css";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

// import bg1 from "../assets/img/BG/bg_01.jpeg";
// import bg2 from "../assets/img/projects/MaxFlix.png";
// import bg3 from "../assets/img/projects/my-weather-app.png";
// import bg4 from "../assets/img/projects/To-do list.png";

function Project() {
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

export { Project };

// <div className=''>
//         <span id='sl_play' class='sl_command'></span>
//         <span id='sl_pause' class='sl_command'></span>
//         <span id='sl_i1' class='sl_command sl_i'></span>
//         <span id='sl_i2' class='sl_command sl_i'></span>
//         <span id='sl_i3' class='sl_command sl_i'></span>
//         <span id='sl_i4' class='sl_command sl_i'></span>
//         <section id='slideshow'>
//           <a
//             class='play_commands pause'
//             href='#sl_pause'
//             title='Maintain paused'>
//             Pause
//           </a>
//           <a
//             class='play_commands play'
//             href='#sl_play'
//             title='Play the animation'>
//             Play
//           </a>
//           <a
//             class='commands prev commands1'
//             href='#sl_i4'
//             title='Aller à la dernière slide'>
//             &lt;
//           </a>
//           <a
//             class='commands next commands1'
//             href='#sl_i2'
//             title='Aller à la 2ème slide'>
//             &gt;
//           </a>
//           <a
//             class='commands prev commands2'
//             href='#sl_i1'
//             title='Aller à la 1ère slide'>
//             &lt;
//           </a>
//           <a
//             class='commands next commands2'
//             href='#sl_i3'
//             title='Aller à la 3ème slide'>
//             &gt;
//           </a>
//           <a
//             class='commands prev commands3'
//             href='#sl_i2'
//             title='Aller à la 2ème slide'>
//             &lt;
//           </a>
//           <a
//             class='commands next commands3'
//             href='#sl_i4'
//             title='Aller à la 4ème slide'>
//             &gt;
//           </a>
//           <a
//             class='commands prev commands4'
//             href='#sl_i3'
//             title='Aller à la 3ème slide'>
//             &lt;
//           </a>
//           <a
//             class='commands next commands4'
//             href='#sl_i1'
//             title='Aller à la 1ère slide'>
//             &gt;
//           </a>
//           <div class='container'>
//             <div class='c_slider'></div>
//             <div class='slider'>
//               <figure>
//                 <img src={bg1} alt='' width='640' height='310' />
//                 <figcaption>The mirror of soul</figcaption>
//               </figure>
//               <figure>
//                 <img src={bg2} alt='' width='640' height='310' />
//                 <figcaption>
//                   Let's cross that bridge when we come to it
//                 </figcaption>
//               </figure>
//               <figure>
//                 <img src={bg3} alt='' width='640' height='310' />
//                 <figcaption>
//                   Sushi<em>(do)</em> time
//                 </figcaption>
//               </figure>
//               <figure>
//                 <img src={bg4} alt='' width='640' height='310' />
//                 <figcaption>
//                   Sushi<em>(do)</em> time
//                 </figcaption>
//               </figure>
//             </div>
//           </div>
//           <span id='timeline'></span>
//           <ul class='dots_commands'>
//             <li>
//               <a title='Afficher la slide 1' href='#sl_i1'>
//                 Slide 1
//               </a>
//             </li>
//             <li>
//               <a title='Afficher la slide 2' href='#sl_i2'>
//                 Slide 2
//               </a>
//             </li>
//             <li>
//               <a title='Afficher la slide 3' href='#sl_i3'>
//                 Slide 3
//               </a>
//             </li>
//             <li>
//               <a title='Afficher la slide 4' href='#sl_i4'>
//                 Slide 4
//               </a>
//             </li>
//           </ul>
//         </section>
//       </div>
//       <div id='my_carousel' class='carousel slide' data-ride='carousel'>
//         <ol class='carousel-indicators'>
//           <li data-target='#my_carousel' data-slide-to='0' class='active'></li>
//           <li data-target='#my_carousel' data-slide-to='1'></li>
//           <li data-target='#my_carousel' data-slide-to='2'></li>
//         </ol>
//         <div class='carousel-inner'>
//           <div class='item active'>
//             <div class='carousel-page'>
//               <img src={bg1} class='img-responsive' style='margin:0px auto;' />
//             </div>
//             <div class='carousel-caption'>Page 1 de présentation</div>
//           </div>
//           <div class='item'>
//             <div class='carousel-page'>
//               <img
//                 src={bg2}
//                 class='img-responsive img-rounded'
//                 style='margin:0px auto;'
//               />
//             </div>
//             <div class='carousel-caption'>Page 2 de présentation</div>
//           </div>
//           <div class='item'>
//             <div class='carousel-page'>
//               <img
//                 src={bg3}
//                 class='img-responsive img-rounded'
//                 style='margin:0px auto;max-height:100%;'
//               />
//             </div>
//             <div class='carousel-caption'>Page 2 de présentation</div>
//           </div>
//         </div>
//         <a class='left carousel-control' href='#my_carousel' data-slide='prev'>
//           <span class='glyphicon glyphicon-chevron-left'></span>
//         </a>
//         <a class='right carousel-control' href='#my_carousel' data-slide='next'>
//           <span class='glyphicon glyphicon-chevron-right'></span>
//         </a>
//       </div>
