import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, sources } = props;
  return (
    <div className="my-3 ">
      
        <div className="card border border-2 border-light ">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger text-white"
            style={{ left: "50%", zIndex: "1", border: "1px solid white" }}
          >
            source: {sources}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.hindustantimes.com/tech/img/2023/06/25/1600x900/asteroid_Pixabay_3_1681385074340_1687665836331.jpg"
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body " style={{ color: "white" }}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>

            <p className="card-text">
              <small className="text-success">
                {" "}
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>

            <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-primary"   > Read More </a>
          </div>
          
        </div>
      
    </div>
  );
};

export default NewsItem;
