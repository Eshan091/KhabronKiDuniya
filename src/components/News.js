import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // constructor(props) {
  //   super(props);
  //   state = {
  //     // articles:articles, //yeh tb use karenge jb artivles manually fill kr rhe
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults:0,

  //   };

  // }
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=372159c173f948ec9ed9949a73e57264&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let data =  await fetch(url);
    props.setProgress(30);

    let parsedData =  await data.json();
    props.setProgress(70);
    //json me convert kar denge data ko
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
       document.title=`${props.category}-khabron ki duniya`;

    updateNews();
  }, []);

  // const componentDidMount=()=> {
  //   props.setProgress(10);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=372159c173f948ec9ed9949a73e57264&page=1&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   props.setProgress(30);

  //   setState({ loading: true });
  //   let parsedData = await data.json();
  //   props.setProgress(70);
  //   //json me convert kar denge data ko
  //   setArticles(parsedData.articles);
  //   setTotalResults(parsedData.totalResults);
  //   setLoading(false)

  //   props.setProgress(100);

  // }
  // handleNextCLick = async () => {
  //   if (
  //     state.page + 1 >
  //     Math.ceil(state.totalResults / props.pageSize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       props.country
  //     }&category=${
  //       props.category
  //     }&apiKey=372159c173f948ec9ed9949a73e57264&page=${
  //       state.page + 1
  //     }&pageSize=${props.pageSize}`;
  //     let data = await fetch(url);
  //     setState({ loading: true });
  //     let parsedData = await data.json(); //json me convert kar denge data ko
  //     console.log(parsedData);
  //     setState({
  //       articles: parsedData.articles,
  //       loading: false,
  //       page: state.page + 1,
  //     });
  //   }
  // };

  // handlePreviousCLick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=372159c173f948ec9ed9949a73e57264&page=${
  //     state.page - 1
  //   }&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   setState({ loading: true });
  //   let parsedData = await data.json(); //json me convert kar denge data ko
  //   console.log(parsedData);
  //   setState({
  //     articles: parsedData.articles,
  //     page: state.page - 1,
  //     loading: false,
  //   });
  // };
   const fetchMoreData = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=372159c173f948ec9ed9949a73e57264&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
     setPage(page + 1);

    let data = await fetch(url);

    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-6 ">
      <h1 className="text-center " style={{marginTop:'90px' }}>
        <strong style={{ color: "white"}}>
          Khabron Ki Duniya-
          <span
            style={{
              border: "2px solid white",
              backgroundColor: "red",
              fontSize: 25,
              color: "white",
              padding: "1px 5px 1px 5px",
            }}
          >
            {props.category}
          </span>
        </strong>
      </h1>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row mx-5">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    sources={element.source.name}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={state.page <= 1}
            type="button"
            className="btn btn-light mb-3"
            onClick={handlePreviousCLick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
             page + 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-light mb-3"
            onClick={handleNextCLick}
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
