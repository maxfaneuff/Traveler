import React from "react";

const cardStyle = {
  width: "18rem"
};

const Hotels = props => (
  <div>
    <div className="card" style={cardStyle}>
      <img
        className="card-img-top"
        src="https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <div className="row justify-content-center">
          <h5 className="card-title">Hotel Title (a prop value)</h5>
          <p className="card-text">Hotel Address (a prop value)</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price Index ($$$ - a prop value)</li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <i class="far fa-thumbs-up">100</i>
              <i class="far fa-thumbs-down">20</i>
            </div>
          </li>
          <li className="list-group-item">Amenities (if easy from API)</li>
        </ul>
      </div>
      <div className="card-body">
        <div class="row justify-content-center">
          <button type="button" className="btn btn-dark">
            Add to My Path
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Hotels;
