import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let topHeadlines = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        let allNewsUrl = `https://newsapi.org/v2/${this.props.newsType}?domains=${this.props.newsDomain}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(allNewsUrl);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        console.log('Prev');
        let allNewsUrl = `https://newsapi.org/v2/${this.props.newsType}?domains=${this.props.newsDomain}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(allNewsUrl);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log('Next');
        if (!(Math.ceil(this.state.page + 1 > this.state.totalResults / this.props.pageSize))) {
            let allNewsUrl = `https://newsapi.org/v2/${this.props.newsType}?domains=${this.props.newsDomain}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(allNewsUrl);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false
            })
        }
    }


    render() {
        return (
            <div className="container my-5">
                <h1>NewsApp - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='container d-flex justify-content-between my-3'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
                <div className="row" style={{minHeight: '60vh'}}>
                    {!this.state.loading && this.state.articles.map((element) => {
                        console.log(element);
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 55) : ""} description={element.description ? element.description.slice(0, 150) : ""} author={element.author} date={new Date(element.publishedAt)} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between my-3'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;