import React from 'react'
import AngleUpIcon from 'react-icons/lib/fa/angle-up'
import AngleDownIcon from 'react-icons/lib/fa/angle-down'
import '../App.css';
import '../index.css';

export default function Post ({ post }) {
  	return (
      <div className="Post">
		  <div className="VoteScore" title={post.voteScore}>
		    <button className='icon-btn'>
		      <AngleUpIcon size={20}/>
		    </button>
		    <div className="Score">
		      {post.voteScore}
		    </div>
		    <button className='icon-btn'>
		      <AngleDownIcon size={20}/>
		    </button>
		  </div>
		  <div className="Author" title={post.author}>
		    <p>
		      {post.author}
		    </p>
		  </div>
		  <div className="Title">
		    <p>
		      {post.title}
		    </p>
		  </div>
		  <div className="Category">
		    <p>
		      {post.category}
		    </p>
		  </div>
		  <div className="PostBody">
		    <p>
		      {post.body}
		    </p>
		  </div>
		</div>
	)
}