import React from 'react';
import './Cardd.css';

function Cardd() {
	return (
		<div className="main1">
      <ul class="card-wrapper1">
        <li class="card1">
          <img className="img1" src="./src/assets/assets1.jpg" alt="" />
          <h3><a href="">Uma Super Viagem</a></h3>
          <p>descanse com a família</p>
        </li>
        <li class="card1">
          <img className="img1" src="./src/assets/assets2.jpg" alt="" />
          <h3><a href="">Uma inesquecível aventura</a></h3>
          <p>ficará para sempre em sua memórias</p>
        </li>
        <li class="card1">
          <img className="img1" src="./src/assets/assets3.jpg" alt="" />
          <h3><a href="">Positivamente assustador</a></h3>
          <p>sonhará com as Lembranças</p>
        </li>
      </ul>
		
		</div>
	)
}

export default Cardd
