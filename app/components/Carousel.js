import React from 'react';
import ReactDOM from 'react-dom';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="finalImages/sabaiwine.png" alt="Chania"/>
                <div className="carousel-caption">
                  <h3>Test</h3>
                  <p>The most beautiful test in the world.</p>
                </div>
              </div>

              <div className="item">
                <img src="finalImages/perfume.png" alt="Chania"/>
                <div className="carousel-caption">
                  <h3>Test</h3>
                  <p>The most beautiful test in the world.</p>
                </div>
              </div>

              <div className="item">
                <img src="finalImages/goldwatch.png" alt="Flower"/>
                <div className="carousel-caption">
                  <h3>Test</h3>
                  <p>The most beautiful test in the world.</p>
                </div>
              </div>

              <div className="item">
                <img src="finalImages/vcarpels.png" alt="Flower"/>
                <div className="carousel-caption">
                  <h3>Test</h3>
                  <p>The most beautiful test in the world.</p>
                </div>
              </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


          <div id="team">
            <div id="quote">Opulence. For those who appreciate the finer things in life.</div>
            <ul>
              <li className="col-md-3">
                <figure>
                  <img src="finalImages/clemsrs.png"/>
                  <figcaption>Clement Mihailescu</figcaption>
                </figure></li>
              <li className="col-md-3">
                <figure>
                  <img src="finalImages/jamessrs.png"/>
                  <figcaption>James Kim</figcaption>
                </figure></li>
              <li className="col-md-3">
                <figure>
                  <img src="finalImages/andysrs.png"/>
                  <figcaption>Andrew McGovern</figcaption>
                </figure></li>
              <li className="col-md-3">
                <figure>
                  <img src="finalImages/winstonsrs.png"/>
                  <figcaption>Winston Wang</figcaption>
                </figure></li>
            </ul>
          </div>
        </div>
      )
    }
};
