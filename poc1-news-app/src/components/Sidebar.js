import React, { Component } from 'react';
import Html5Icons from './Html5Icons';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let topHeadlines = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;
        // let allNewsUrl = `https://newsapi.org/v2/${this.props.newsType}?domains=${this.props.newsDomain}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(topHeadlines);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles
        })
    }
    render() {
        return (
            <>
                <div className="card" style={{ marginTop: '78px' }}>
                    <h5 className="card-header bg-dark text-light">Source</h5>
                    <div className="card-body" style={{ height: '303px', overflow: 'auto' }}>
                        <ul className="list-group list-group-flush">
                            {this.state.articles.map((element, index) => {
                                console.log(element);
                                return <li className="list-group-item" key={index}><Html5Icons icon="fas fa-folder-open" /> {element.source.name}</li>
                            })}
                            
                        </ul>
                    </div>
                </div>

                <div className="card my-4">
                    <h5 className="card-header bg-dark text-light">Arcives</h5>
                    <div className="card-body" style={{ height: '303px', overflow: 'auto' }}>
                        <ul className="list-group list-group-flush">
                            {this.state.articles.map((element, index) => {
                                console.log(new Date(element.publishedAt).getMonth());
                                return <li className="list-group-item" key={index}><Html5Icons icon="fa-duotone fa-calendar-check" />{new Date(element.publishedAt).toDateString()}</li>
                            })}

                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Sidebar
