import React , { useState }from 'react'
import './Regis.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import bg from '../assets/img/Regis.jpg';

export default function LoginForm (){

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
      e.preventDefault();
      localStorage.setItem('name',name);
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
                            <input type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)}/>
                          </div>
                          <div class="form-floating mb-3">
                            <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                          </div>
                          <div class="form-floating mb-3">
                            <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                          </div>
          
                          <div class="d-grid">
                            <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button" onClick={handleSubmit}>Daftar</button>
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