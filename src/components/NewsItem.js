import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3 ">
        <div
          className="card border border-2 border-light"
         
        >
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
            <p className="card-text" >
              <small className="text-success">
                {" "}
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>

            <a
              href={newsUrl}
              target="_blank" rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
