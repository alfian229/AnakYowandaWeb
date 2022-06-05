import React , { useState }from 'react'
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import bg from '../assets/img/Login.jpg';


export default function LoginForm (){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
      }

      return(
        <div className="App">
          <div class="container-fluid ps-md-0">
              <div class="row g-0">
                <img class="d-none d-md-flex col-md-4 col-lg-6 bg-imageL" img src={bg}></img>
                <div class="col-md-8 col-lg-6">
                  <div class="login d-flex align-items-center py-5">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h3 class="login-heading mb-4">Yoi Boy!</h3>
                          <form onSubmit={handleSubmit}>
                            <div class="form-floating mb-3">
                              <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div class="form-floating mb-3">
                              <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                            </div>
            
                            <div class="form-check mb-3">
                              <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                              <label class="form-check-label" for="rememberPasswordCheck">
                                Ingat password
                              </label>
                            </div>
            
                            <div class="d-grid">
                              <button class="btn btn-lg btn-danger btn-login text-uppercase fw-bold mb-2" type="button" onClick={handleSubmit}>Masuk</button>
                              <div class="text-center">
                                <a class="small" href="#">Lupa password?</a>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
 )  
}