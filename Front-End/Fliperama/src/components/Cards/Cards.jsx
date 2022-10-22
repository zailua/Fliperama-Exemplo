import React from 'react';
import './Cards.css';

 function Card () {
  return (
    <ul class="cards">
  <li>
    <a href="" class="card">
      <img src="./src/assets/osaka.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Roberta Hanvet</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">"Melhores alocações!"</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="./src/assets/streets.jpg" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jéssica Kim</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">"viciada nesse site...(i know u_u)"</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="./src/assets/seul.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Milena Fontoura</h3>
            <span class="card__tagline"></span>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">"Adoro as promos de verão"</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="./src/assets/shinjuku.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Yuta Fushiguro</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">"Saudades Tokyo... ;-;</p>
      </div>
    </a>
  </li>    
</ul>
  )
}
export default Card