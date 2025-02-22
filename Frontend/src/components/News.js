import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = ({ countryName, pageSize, category, setProgress, apiKey}) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  // Capitalize the first letter of the category
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Set the document title
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - GlobalBrief`;
  }, [category]);

  // Fetch news updates
  const newsUpdate = async () => {
    setProgress(10);
    let Url = `https://newsapi.org/v2/top-headlines?country=${countryName}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let Data = await fetch(Url);
    let parsedData = await Data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  // Fetch data when the component mounts or when page or category changes
  useEffect(() => {
    newsUpdate();
  }, [page, category, countryName, pageSize]);

  // Handle next and previous page clicks
  const handleNextClick = () => {
    setPage(page + 1);
    newsUpdate()
  };

  const handlePrevClick = () => {
    setPage(page - 1);
    newsUpdate()
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ margin: "35px" , marginTop : "90px" }}>
        GlobalBrief - Top {capitalizeFirstLetter(category)} Headlines
      </h2>
      {loading && <Spinner />}

      <div className="row">
        {!loading &&
          articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description.slice(0, 90) : ""}
                ImageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://s.yimg.com/ny/api/res/1.2/IG45T4juX4Uj9H2DRhDeXQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/bloomberg_markets_842/057ea2d98be0d80efef522c0eed1fb36"
                }
                newsUrl={element.url}
                author={element.author ? element.author : "Unknown"}
                date={element.publishedAt ? element.publishedAt : "Unknown"}
                source={element.source.name ? element.source.name : "Unknown"}
              />
            </div>
          ))}
      </div>

      <div className="container my-3 d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handlePrevClick}
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleNextClick}
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  countryName: "us",
  pageSize: 7,
  category: "business",
};

News.propTypes = {
  countryName: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
