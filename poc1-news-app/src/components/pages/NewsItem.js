import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../assest/images/no-image.jpeg';

function NewsItem(props) {
  let { title, description, author, date, imgUrl, newsUrl, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <Link to={`/source/${source}`} className="source-sticker position-absolute top-0 end-0 badge rounded-pill bg-danger">
          {source}
        </Link>
        <img src={imgUrl ? imgUrl : noImage} className="card-img-top" alt="..." />
        <div className="card-body text-start">
          <Link to={`//${newsUrl}`} target="_blank">
            <h5 className="card-title">{title}...</h5>
          </Link>
          <p className="card-text"><small className='text-muted'><strong>By </strong>{author} <strong>on </strong>{new Date(date).toGMTString()}</small></p>
          <p className="card-text my-2">{description}...</p>
          <Link to={`//${newsUrl}`} target="_blank" className="btn btn-sm btn-dark">Read More...</Link>
        </div>
      </div>
    </div>
  )
}

export default NewsItem;