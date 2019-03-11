import React from 'react';

const Album = ({ posts }) => {
  return <div className="card-columns">
    { posts.map((post) => (
      <div className="card" key={post.id}>
        <img className="card-img-top" src={post.cover} alt="cover" />
        <div className="card-body">
          <h5 className="card-title">{post.name}</h5>
          <p className="card-text">{post.artist}</p>
        </div>
       
      </div>

    ))}
  </div>
}

export default Album;




