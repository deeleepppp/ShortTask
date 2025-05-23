import React, { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data on mount
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data.slice(0, 5)); // Get first 5 posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Top 5 Posts</h2>
      <ul className="space-y-3">
        {posts.map(post => (
          <li key={post.id} className="p-4 bg-gray-100 rounded shadow-sm">
            <p className="font-medium text-gray-800">{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
