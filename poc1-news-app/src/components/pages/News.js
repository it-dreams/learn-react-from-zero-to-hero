import React, { useEffect, useState } from 'react'
import NewsItem from '../pages/NewsItem';
import Spinner from '../shared/Spinner';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const News = (props) => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        const topHeadlines = `https://newsapi.org/v2/${props.newsType}?country=${props.country}&category=${category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        // const allNewsUrl = `https://newsapi.org/v2/${props.newsType}?domains=${props.newsDomain}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        setLoading(true);
        let data = await fetch(topHeadlines);
        let parseData = await data.json();
        console.log(parseData);
        setLoading(false);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
    }

    useEffect(() => {
        updateNews();
    }, [category])

    const handlePrevClick = async () => {
        setPage(page - 1);
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page + 1);
        updateNews();
    }

    return (
        <div className="container my-4">
            {/* <h1 className=' text-center'>NewsApp - Top Headlines</h1> */}

            <div className="row" style={{ minHeight: '60vh', marginTop: '20px' }}>
                {loading && <Spinner />}

                {!loading && articles.map((element) => {
                    return <div className="col-lg-3 col-md-4 col-sm-12" key={element.url}>
                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} author={element.author} date={element.publishedAt} imgUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
                    </div>
                })}
            </div>
            <div className='d-flex justify-content-between my-3'>
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    )
}

News.defaultProps = {
    newsType: 'top-headlines',
    newsDomain: 'aajtak.in', //abplive.com, indiatoday.in, indiatvnews.com, 
    country: 'in',
    category: 'business',
    pageSize: 15
}

News.propTypes = {
    newsType: PropTypes.string,
    newsDomain: PropTypes.string,
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}

export default News;