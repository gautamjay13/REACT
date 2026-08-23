import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://m.media-amazon.com/images/I/51HCHFclmmL.jpg"
            alt="amazon"
          />
          <button>Save</button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Senior Level</h4>
            <h4>Part Time</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai,India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
