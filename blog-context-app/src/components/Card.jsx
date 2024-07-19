import React from 'react';

function Card({ post }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <p className="text-xl font-bold mb-2">{post.title}</p>
      <p className="text-gray-600 mb-2">By {post.author}</p>
      <p className="text-gray-400 mb-4">Posted on {post.date}</p>
      <p className="mb-4">{post.content}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
