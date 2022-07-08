import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Html5Icons from '../shared/Html5Icons';

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
        // console.log(parseData);
        this.setState({
            articles: parseData.articles,
            archive: this.getArchive(parseData.articles),
            sources: this.getSources(parseData.articles)
        })
    }

    getSources = (data) => {
        let sourceMap = {};
        let sourceUpdate = [];
        data.forEach(res => {
            if (!sourceMap[res.source.name]) {
                sourceMap[res.source.name] = res.source;
                sourceUpdate.push(res.source.name)
            }
        })
        return sourceUpdate;
    }

    getArchive = (data) => {
        let archiveMap = {};
        let archiveUpdate = [];
        data.forEach(archive => {
            if (!archiveMap[new Date(archive.publishedAt).toDateString()]) {
                archiveMap[new Date(archive.publishedAt).toDateString()] = new Date(archive.publishedAt).toDateString();
                archiveUpdate.push(new Date(archive.publishedAt).toDateString());
            }
        })
        return archiveUpdate;
    }

    render() {
        return (
            <>
                <div className="card" style={{ marginTop: '35px' }}>
                    <h5 className="card-header bg-dark text-light">News Sources</h5>
                    <div className="card-body" style={{ height: '345px', overflow: 'auto' }}>
                        <ul className="list-group list-group-flush">
                            {/* <li className="list-group-item"><Link to='source/aajtak.in' style={{ textDecoration: 'none', color: '#000' }}><Html5Icons icon="fas fa-folder-open" />Aajtak</Link></li> */}
                            {this.state.sources && this.state.sources.map((source) => {
                                return <li className="list-group-item" key={source}>
                                    <Link to={`source/${source}`} style={{ textDecoration: 'none', color: '#000' }}><Html5Icons iconType="source" />{source}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>

                <div className="card my-4">
                    <h5 className="card-header bg-dark text-light">Arcives</h5>
                    <div className="card-body" style={{ maxHeight: '345px', overflow: 'auto' }}>
                        <ul className="list-group list-group-flush">
                            {this.state.archive && this.state.archive.map((date) => {
                                return <li className="list-group-item" key={date}>
                                    <Link to={`archive/${date}`} style={{ textDecoration: 'none', color: '#000' }}><Html5Icons iconType="archive" />{date}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Sidebar;
