import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <footer>
        <div className="row mt-3">
          <div className="col-md-2" />
          <div className="col-md-5 text-center">
            <h3 className="display-5 pt-3">Bijan Parsiyar</h3>

            <p className="display-8">
              I'm a passionate Software Engineer with extensive programming
              experience.
            </p>
          </div>
          <div className="col-md-5">
            <div className="text-center d-block">
              <h3 className="footer-header">Get in touch?</h3>
              <p className="lead p-header">shoot me an email!</p>
              <h3 className="mt-3">
                <Link to="/">bparsiyar@gmail.com</Link>
              </h3>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2" />
          <div className="w3-left col-md-3">
            <div className="footer-menu">
              <h3 className="display-7">Menu</h3>
              <Link to="/about" className="w3-bar-item">
                About
              </Link>
              <Link to="/blog" className="w3-bar-item">
                Blog
              </Link>
              <Link to="/projects" className="w3-bar-item">
                projects
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-menu">
              <h3 className="display-7">Social</h3>

              <button className="social-buttons btn btn-outline-primary">
                <a href="http://www.linkedin.com/in/bijan-parsiyar">
                  <i class="fab fa-linkedin-in" />
                </a>
              </button>
              <button className="social-buttons btn btn-outline-primary">
                <a href="http://www.twitter.com/bijan_io">
                  <i class="fab fa-twitter" />
                </a>
              </button>
              <button className="social-buttons btn btn-outline-primary">
                <a href="http://www.instagram.com/parsiiiyar">
                  <i class="fab fa-instagram" />
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <p mb-10>Copyright &copy; Bijan Parsiyar 2018</p>
          </div>
          <div className="col-md-2" />
        </div>
      </footer>
    </div>
  );
};
