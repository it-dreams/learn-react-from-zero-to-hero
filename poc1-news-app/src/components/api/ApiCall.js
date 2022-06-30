import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ApiCall extends Component {
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
        let data = await fetch(topHeadlines);
        let parseData = await data.json();
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
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default ApiCall;
