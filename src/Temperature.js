import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature margin-top">
      {/*Main container */}
      <div className="container">
        <div className="row">
          {/*Left Section Desktop*/}
          <div className="col-6 d-none d-lg-block">
            {/*Left Container Desktop*/}
            <div className="container-fluid col-bor">
              <div className="row">
                {/*Icon*/}
                <div className="col col-bor">
                  <h2 className="temperature-number">23</h2>
                </div>
                {/*Temperature*/}
                <div className="col col-bor">
                  <h2 className="temperature-number">23</h2>
                </div>
                {/*Description*/}
                <div className="container">
                  <div className="row">
                    <div className="col-3 col-bor">
                      <h2 className="temperature-number">80%</h2>
                    </div>
                    <div className="col-3 col-bor">
                      <h2 className="temperature-number">5 km/h</h2>
                    </div>
                    <div className="col col-bor">
                      <button type="submit" class="btn btn-primary">
                        Main
                      </button>
                      <button type="submit" class="btn btn-primary">
                        Main
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Left Section Mobile */}
          <div className="col d-block d-lg-none">
            {/*Left Container */}
            <div className="container-fluid col-bor">
              <div className="row">
                {/*Icon*/}
                <div className="col col-bor ">
                  <h2 className="temperature-number">23</h2>
                </div>
                {/*Temperature*/}
                <div className="col col-bor">
                  <h2 className="temperature-number">23</h2>
                </div>
                {/*Description*/}
                <div className="container">
                  <div className="row">
                    <div className="col-3 col-bor">
                      <h2 className="temperature-number">80%</h2>
                    </div>
                    <div className="col-3 col-bor">
                      <h2 className="temperature-number">5 km/h</h2>
                    </div>
                    <div className="col-3 col-bor">
                      <button type="submit" class="btn btn-primary">
                        M
                      </button>
                    </div>
                    <div className="col-3 col-bor">
                      <button type="submit" class="btn btn-primary">
                        M
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Right container*/}
          <div className="col-6 d-none d-lg-block">
            <h2 className="temperature-number col-bor">Rain Today</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
