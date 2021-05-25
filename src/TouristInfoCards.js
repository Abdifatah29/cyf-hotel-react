import React from "react";

const TouristInfoCards = ({ cities }) => (
  <div className="container">
    <div className="center">
      <div className="row">
        {Object.keys(cities).map((item, index) => (
          <div className="card" key={index}>
            <img
              src={cities[item].image}
              alt={"image of " + cities[item].name}
            />
            <div className="card-body">
              <p className="card-text">{cities[item].info}</p>
              <a
                href={cities[item].link}
                target="blank"
                className="btn btn-primary"
              >
                Go to {cities[item].name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TouristInfoCards;
