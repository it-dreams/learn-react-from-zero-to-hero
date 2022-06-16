import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class News extends Component {
    static defaultProps = {
        newsType: 'top-headlines',
        newsDomain: 'aajtak.in', //abplive.com, indiatoday.in, indiatvnews.com, 
        country: 'in',
        category: 'business',
        pageSize: 15
    }

    static propTypes = {
        newsType: PropTypes.string,
        newsDomain: PropTypes.string,
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews() {
        const topHeadlines = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        const allNewsUrl = `https://newsapi.org/v2/${this.props.newsType}?domains=${this.props.newsDomain}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true })
        let dataAll = await fetch(allNewsUrl);
        let dataHeadlines = await fetch(topHeadlines);
        let parseData = await dataHeadlines.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }


    render() {
        return (
            <div className="container my-5">
                <h1 className=' text-center'>NewsApp - Top Headlines</h1>
                <div className='d-flex justify-content-between my-3'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
                <div className="row" style={{ minHeight: '60vh' }}>
                    {this.state.loading && <Spinner />}

                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-lg-3 col-md-4 col-sm-12" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 55) : ""} description={element.description ? element.description.slice(0, 95) : ""} author={element.author} date={element.publishedAt} imgUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className='d-flex justify-content-between my-3'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;