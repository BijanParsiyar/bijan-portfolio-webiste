import React from "react";

import chatapp from "./chatapp.PNG";
import expensify from "./expensify.PNG";
import mailfeedback from "./mailfeedback.PNG";
import socialmediafordevelopers from "./socialmediafordevelopers.PNG";

export default () => {
  return (
    <div>
      <div className="landing-projects">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h3 className="text-center">Chat App</h3>
                <img className="project-images" src={chatapp} />
                <p className="mt-2 mb-2">
                  Using <u> NodeJs </u> with SocketIo to emit and real time
                  events and used API in the browser to get users location and
                  then fowarded it to Google API to send a map with the users
                  exact location
                </p>
                <a
                  className="btn"
                  href="https://welcometochatapp.herokuapp.com/"
                >
                  Link to website
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h2 className="text-center">Expensify</h2>
                <img className="project-images" src={expensify} />
                <p className="mt-2 mb-2">
                  Used <u>React</u> and <u>Redux</u> app to allows users to keep
                  track of their finances. I loved how I was able to used the
                  AirBnB date picker API with our dates. Also using google oAuth
                  strategy to sign in users and keep their purchases secure.
                </p>
                <a className="btn" href="https://frugal-feet.herokuapp.com/">
                  Link to website
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <h2 className="text-center">Maily</h2>
                <img className="project-images" src={mailfeedback} />
                <p className="mt-2 mb-2">
                  Mail app using stripe API which allows users to add credits
                  and then use those credits to purchase and send off mass
                  surveys to their email list and recieve constructive criticism
                  based on if the user clicks yes or no in the email sent to
                  them.
                </p>
                <a className="btn" href="https://mailfeedback.herokuapp.com/">
                  Link to website
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h2 className="text-center">DevConnector</h2>
                <img
                  className="project-images"
                  src={socialmediafordevelopers}
                />
                <p className="mt-2 mb-2">
                  Social website for developers to connect with Each other.
                  Using the MERN stack (React, Redux, Express and Node). I was
                  really happy about how this website turned out... I intend on
                  adding more functionality to this website.
                </p>
                <a
                  className="btn"
                  href="https://murmuring-everglades-10066.herokuapp.com/"
                >
                  Link to website
                </a>
              </div>
            </div>
            <div className="col-md-4 mt-7 text-center">
              <h3>
                More projects on my github{" "}
                <a href="https://github.com/BijanParsiyar">
                  www.github.com/BijanParsiyar
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
