import React from "react";
import "./pages.css";

const DayJournal = () => {
  return (
    <div className="day-background-img">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div class="form-group text-center mx-auto">
                <label for="exampleFormControlTextarea1"><h2>Day 1</h2></label><br/><br/>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
              </div>
              <div className="col-row-12 text-center">
                <button type="button" className="btn btn-light" id="save-btn">Save Entry <i className="far fa-save"></i></button>
                <button type="button" className="btn btn-primary" id="edit-btn">Edit Entry <i class="far fa-edit"></i></button><br /><br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayJournal;
