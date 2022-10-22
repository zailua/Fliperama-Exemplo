import React from 'react';
import './Sign.css'


function Sign () {
  return(
    <div className="wrapper">
         <div className="title-text">
            <div className="title login">
               Login
            </div>
            <div className="title signup">
               Cadastro
            </div>
         </div>
         <div className="form-container">
            <div className="slide-controls">
               <input type="radio" name="slide" id="login" checked/>
               <input type="radio" name="slide" id="signup"/>
               <label for="login" class="slide login">Login</label>
               <label for="signup" class="slide signup">Cadastre-se</label>
               <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
               <form action="#" className="login">
                  <div className="field">
                     <input type="text" placeholder="Email" required/>
                  </div>
                  <div className="field">
                     <input type="password" placeholder="Senha" required/>
                  </div>
                  <div className="pass-link">
                     <a href="#">Esqueceu a senha?</a>
                  </div>
                  <div className="field btn">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Login"/>
                  </div>
                  <div className="signup-link">
                     Não é cadastrado? <a href="">Cadastre agora</a>
                  </div>
               </form>
               <form action="#" class="signup">
                  <div className="field">
                     <input type="text" placeholder="Email " required/>
                  </div>
                  <div className="field">
                     <input type="password" placeholder="Senha" required/>
                  </div>
                  <div className="field">
                     <input type="password" placeholder="Confirme a senha" required/>
                  </div>
                  <div className="field btn">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Cadastrar"/>
                  </div>
               </form>
            </div>
         </div>
      </div>
  )
}

export default Sign