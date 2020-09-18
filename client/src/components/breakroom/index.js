/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import NavBar from '../NavBar';

//import stock
import stock from "../img/portfolio-1.jpg";
import stock2 from "../img/portfolio-2.jpg";
import stock3 from "../img/portfolio-4.jpg";
import stock5 from "../img/portfolio-5.jpg";
import stock6 from "../img/dance.png";
import stock7 from "../img/emo.jpg";

class Portfolio extends React.Component {
  render() {
      return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-box text-center">
                <h3 className="title-a">Games</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row  container" >
            <div className="col-lg-4 box">
              <div className="work-box">
                <a href="https://playcanv.as/p/JtL2iqIH/" title="Play" target="_blank" >
                  <div className="work-img ">
                    <img src={stock} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content ">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Swooop Plane</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box"> 
                <a href="https://emoji-runner.herokuapp.com/" title="Live Demo" target="_blank" >
                  <div className="work-img">
                    <img src={stock7} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Emoji-Runner</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="work-box">
                <a href="https://dddance.party/?ref=three"  target="_blank" >
                  <div className="work-img ">
                    <img src={stock6} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Dance Party </h2>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="work-box">
                <a href="http://lab.sehsucht.de/"  target="_blank" >
                  <div className="work-img ">
                    <img src={stock2} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Play Beat</h2>
                        </div>
                       
                      </div>
                      <div >
                        <p className="subtitle-a ">
TBD ..
                        
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="work-box">
                <a href="https://maurice-employee-directory.herokuapp.com/" title="Live Demo" target="_blank" >
                  <div className="work-img ">
                    <img src={stock3} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Employee-Directory</h2>
                        </div>
                        <a href="https://github.com/mauricechouam/React-Employee-Directory" title="Repository" target="_blank">
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Github Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a ">
                          TBD...
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="work-box">
                <a href="https://maurice-burger.herokuapp.com/" title="Live Demo" target="_blank" >
                  <div className="work-img ">
                    <img src={stock5} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Burger Restaurant </h2>
                        </div>
                        <a href="https://github.com/mauricechouam/Burger" title="Repository" target="_blank">
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Github Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a ">
                      TBD...
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              </div>
              <NavBar />
      </section>
    );
  }
}

export default Portfolio;
