import React from "react";
import "./pages.css";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className='home'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='card border-info mb-3' id='home-card'>
                  <div className='card-header'>Step 1:</div>
                  <div className='card-body text-info'>
                    <p className='card-text'>
                      Select the "Plans" link on the first day of your week, and
                      think about how you would like to spend it.
                    </p>
                    <p>
                      Title one planned activity you have and type a few details
                      about it in the text block below. Make sure to state how
                      much time you plan to spend doing this activity! It
                      doesn't need to be too long, just the important details.
                    </p>
                    <p>
                      Repeat this step for each notable activity for the day.
                      Once your day is scheduled, repeat this process for each
                      day of the coming week.
                    </p>
                    <div className='row'>
                      {/* <div className="col-sm-6 text-center">
                        <i className="fas fa-user-clock" id="fas"></i>
                      </div>
                      <div className="col-sm-6 text-center">
                        <i className="far fa-calendar-alt" id="far"></i>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='card border-info mb-3' id='home-card-2'>
                  <div className='card-header'>Step 2:</div>
                  <div className='card-body text-info'>
                    <p className='card-text'>
                      Live your day! Usually the thought that you have decided
                      how you want to live your day will help you to be more
                      self-aware when making choices so that they will allow you
                      to enjoy the present without robbing from the future.
                    </p>
                    <br />
                    <div className='row'>
                      <div className='col-sm-4 text-center'>
                        <i className='fas fa-heart' id='fas'></i>
                      </div>
                      <div className='col-sm-4 text-center'>
                        <i className='fas fa-praying-hands' id='fas'></i>
                      </div>
                      <div className='col-sm-4 text-center'>
                        <i className='fas fa-biking' id='fas'></i>
                        <br />
                        <br />
                      </div>
                      <div className='col-sm-4 text-center'>
                        <i className='fas fa-gamepad' id='fas'></i>
                      </div>
                      <div className='col-sm-4 text-center'>
                        <i className='fas fa-bed' id='fas'></i>
                      </div>
                      <div className='col-sm-4 text-center'>
                        <i className='fas fa-briefcase' id='fas'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='card border-info mb-3' id='home-card-3'>
                  <div className='card-header'>Step 3:</div>
                  <div className='card-body text-info'>
                    <p className='card-text'>
                      Pick a time toward the end of your day when you can
                      journal. Like in Step 1, go to the "Plans" section of your
                      day and fill in the blocks of time, but this time, make
                      your notes in the "Compare" column, filling the day with
                      how you actually spent it, adding brief notes and details.
                      Compare how you planned to live the day to how you chose
                      to live the day.
                    </p>
                    <p>
                      Once you have your thoughts in order, begin journaling.
                    </p>
                    <p>
                      Feel free to go to future days and edit how you want yor
                      plans to look based on how today went.
                    </p>
                    <div className='row'>
                      {/* <div className="col-sm-4 mx-auto">
                        <i className="fas fa-book-reader" id="fas"></i>
                      </div>
                      <div className="col-sm-4">
                        <i className="fas fa-pen" id="fas"></i>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='card border-info mb-3' id='home-card-4'>
                  <div className='card-header'>Did you know:</div>
                  <div className='card-body text-info'>
                    <p className='card-text'>
                      94% of today's thoughts are the same as yesterday's. When
                      journaling, just free-write. Eventually, you'll find that
                      your thoughts come full circle and repeat themselves,
                      usually related to something that bothers you. Journaling
                      about these "thought loops" is an effective way of
                      breaking the cycles that stop us from living fuller lives.
                    </p>
                    <p>
                      It's important to note that there is no guaranteed cure
                      all to life's troubles, but journaling in this way can
                      help to ease them, at least.
                    </p>
                    <p>We wish you good journaling.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 text-center'>
                <button type='button' className='btn btn-info' id='home-button'>
                  <Link to='/Week' className='week-link'>
                    Let's Get Started!
                  </Link>
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
