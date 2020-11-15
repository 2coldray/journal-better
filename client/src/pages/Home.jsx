import React from "react";
import "./pages.css";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div
                  className="card border-info mb-3 shadow p-3 mb-5 bg-white rounded"
                  id="home-card"
                >
                  <div className="card-header">Step 1:</div>
                  <div className="card-body text-info">
                    <p className="card-text">
                      Select the first day of your week, and think about how you
                      would like to spend it.
                    </p>
                    <p>
                      Break up your day into blocks of time. Pick a few details
                      or goals for each block and make a note for that time in
                      your journal.
                    </p>
                    <br />
                    <p>Repeat this step for each day of the coming week.</p>
                    <br />
                    <div className="row">
                      <div className="col-sm-6 text-center">
                        <i className="fas fa-user-clock" id="fas"></i>
                      </div>
                      <div className="col-sm-6 text-center">
                        <i className="far fa-calendar-alt" id="far"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="card border-info mb-3 shadow p-3 mb-5 bg-white rounded"
                  id="home-card-2"
                >
                  <div className="card-header">Step 2:</div>
                  <div className="card-body text-info">
                    <p className="card-text">
                      Live your day! Usually just knowing that you have decided
                      how you want to live your day will make you more aware of
                      your choices and will help you make better ones that will
                      allow you to enjoy the present while working for the
                      future.
                    </p>
                    <br />
                    <div className="row">
                      <div className="col-sm-4 text-center">
                        <i className="fas fa-heart" id="fas"></i>
                      </div>
                      <div className="col-sm-4 text-center">
                        <i className="fas fa-praying-hands" id="fas"></i>
                      </div>
                      <div className="col-sm-4 text-center">
                        <i className="fas fa-biking" id="fas"></i>
                        <br />
                        <br />
                      </div>
                      <div className="col-sm-4 text-center">
                        <i className="fas fa-gamepad" id="fas"></i>
                      </div>
                      <div className="col-sm-4 text-center">
                        <i className="fas fa-bed" id="fas"></i>
                      </div>
                      <div className="col-sm-4 text-center">
                        <i className="fas fa-briefcase" id="fas"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div
                  className="card border-info mb-3 shadow p-3 mb-5 bg-white rounded"
                  id="home-card-3"
                >
                  <div className="card-header">Step 3:</div>
                  <div className="card-body text-info">
                    <p className="card-text">
                      Pick a time toward the end of your day when you can
                      journal. Like in Step 1, fill in the blocks of time, but
                      this time, fill the day with how you actually spent it,
                      adding notes and details. Compare the two: how you wanted
                      to live the day, and how you chose to live it. Once you
                      have your thoughts in order, begin journaling.
                    </p>
                    <br />
                    <p>
                      Feel free to go to future days and edit how you want yor
                      blocks of time to look based on how today went.
                    </p>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-4 mx-auto">
                        <i className="fas fa-book-reader" id="fas"></i>
                      </div>
                      <div className="col-sm-4">
                        <i className="fas fa-pen" id="fas"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="card border-info mb-3 shadow p-3 mb-5 bg-white rounded"
                  id="home-card-4"
                >
                  <div className="card-header">Did you know:</div>
                  <div className="card-body text-info">
                    <p className="card-text">
                      94% of today's thoughts are the same from yesterday. When
                      journaling, just free-write. Eventually, you'll find a
                      repeated "thought loop", which is a repeated pattern of
                      thoughts you have. These are usually related to something
                      that bothers you. Journaling about these "thought loops",
                      combined with taking a look at how you live each day,
                      versus how you could live, is an effective way of taking
                      stock of your troubles and goals, and can help to guide
                      yourself to different choices that can resolve issues and
                      change your life for the better.
                    </p>
                    <p>
                      It's important to note that there is no guaranteed cure
                      all to life's troubles, but journaling in this way can
                      help to ease them, at least. After all, it is better to
                      adapt to life than to wish for an easy one.
                    </p>
                    <p>We wish you good journaling.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 text-center'>
                <button type='button' className='btn btn-info' id="home-button">
                  <Link to="/Week" className="week-link">Let's Get Started!</Link>

               </button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
