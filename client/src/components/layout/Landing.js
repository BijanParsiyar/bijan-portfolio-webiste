import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Got an Idea?</h1>
                <p className="landing-hook">
                  Hey, I'm a software developer from Plano, Texas. I can help
                  you build your next product.
                </p>
                <hr />
                <p className="landing-subhook">
                  I design, build operate & sometimes rescue full-stack web
                  applications. <br /> Have a project you'd like to discuss?{" "}
                  <br />
                  <p>
                    Let's chat <Link to="/">bparsiyar@gmail.com</Link>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
