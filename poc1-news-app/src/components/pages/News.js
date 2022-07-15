import React from 'react';
import NewsItem from '../pages/NewsItem';
import Spinner from '../shared/Spinner';
import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';

const News = (props) => {
    const [loading, data, page, updatePage, totalResults ] = useFetch(props)

    
    // const handlePaginationClick = (type) => {
    //     updatePage(type);
    // }
    
    // const handlePrevClick = async () => {
    //     updatePage('dec');
    // }

    // const handleNextClick = async () => {
    //     updatePage('inc');
    // }

    console.log(data)

    return (
        <div className="container">
            <div className="row" style={{ minHeight: '60vh', marginTop: '20px' }}>
                {loading && <Spinner />}
                {/* {JSON.stringify(result)} */}
                {!loading && data.articles.map((element) => {
                    return <div className="col-lg-3 col-md-4 col-sm-12" key={element.url}>
                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} author={element.author} date={element.publishedAt} imgUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
                    </div>
                })}
            </div>
            <div className='d-flex justify-content-between my-3'>
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={() => updatePage('dec')}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={() => updatePage('inc')}>Next &rarr;</button>
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