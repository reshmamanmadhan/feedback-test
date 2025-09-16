import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import './styles/test1.css'; 

function AppTest1() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/comments');
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredComments = 
  searchTerm 
  ? data?.filter(comment => comment.id === Number(searchTerm)) 
  : data;

  return (
    <div className="container">
      <h1>Comments</h1>

      {/* search input */}
      <input
        type="text"
        placeholder="Search by name or body..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul className="comments-list">
        {filteredComments?.map(post => (
          <li key={post.id} className="comment-card">
            <div className="comment-id">{post.id}</div>
            <div className="comment-details">
              <h3 className="comment-name">{post.name}</h3>
              <p className="comment-body">{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppTest1;
