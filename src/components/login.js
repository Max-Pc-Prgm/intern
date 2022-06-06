import React from "react";
import Header from "./header";
import './login.css';

function login() {
  return (
    <div>
      <Header />
  
      <div className="for-padd">
        <main className="login-form">
          <div className="cotainer">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header login-wt"><u>Login</u></div>
                  <div className="card-body">
                    <form action="/staff" method="">
                      <div className="form-group row">
                        <label
                          for="email_address"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          Username
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            id="email_address"
                            className="form-control"
                            name="email-address"
                            required
                            autofocus
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          for="password"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          Password
                        </label>
                        <div className="col-md-6">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-6 offset-md-4">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="remember" /> Remember
                              Me
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 offset-md-4">
                        <button type="submit" className="btn btn-primary btn-padding">
                         Login
                        </button>
                        <a href="/#" className="btn btn-link">
                          Contact Admin
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default login;
