import React, { Component } from 'react'
import noImage from '../assest/images/no-image.jpeg'

class NewsItem extends Component {
  render() {
    let { title, description, author, date, imgUrl, newsUrl, source } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger" style={{ transform: 'translate(5%, -50%)' }}>
            {source}
          </span>
          <img src={imgUrl ? imgUrl : noImage} className="card-img-top" alt="..." style={{ height: '200px' }} />
          <div className="card-body text-start">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text"><small className='text-muted' style={{ fontSize: '12px' }}><strong>By </strong>{author} <strong>on </strong>{new Date(date).toGMTString()}</small></p>
            <p className="card-text my-2">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;