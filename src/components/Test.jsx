import React, { useEffect, useState } from 'react';
import { blueskyAPI } from '../services/api.ts';

const Test = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState('Checking connection...');

  useEffect(() => {
    const testAPI = async () => {
      try {
        setConnectionStatus('Attempting to connect to Bluesky...');
        await blueskyAPI.init();
        setConnectionStatus('Connected to Bluesky! Fetching posts...');
        
        const searchResults = await blueskyAPI.searchFeed('"new york city" AND art gallery');
        console.log('Search Results:', searchResults);
        setPosts(searchResults);
        setConnectionStatus('Successfully fetched posts!');
      } catch (err) {
        console.error('Test Error:', err);
        setError(err.message || 'An unknown error occurred');
        setConnectionStatus('Connection failed');
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <h2 className="font-bold">Connection Status:</h2>
        <p>{connectionStatus}</p>
        {error && (
          <div className="mt-2 text-red-500">
            <h3 className="font-bold">Error Details:</h3>
            <p>{error}</p>
          </div>
        )}
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg">
              <div className="font-bold">{post.author.displayName} (@{post.author.handle})</div>
              <div className="mt-2">{post.text}</div>
              {post.media && post.media.length > 0 && (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {post.media.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img.thumb} 
                      alt={img.alt || 'Post image'} 
                      className="rounded w-full h-auto"
                    />
                  ))}
                </div>
              )}
              <div className="mt-2 text-sm text-gray-500">
                <span className="mr-4">❤️ {post.likes}</span>
                <span className="mr-4">🔄 {post.reposts}</span>
                <span>💬 {post.replies}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No posts found</div>
      )}
    </div>
  );
};

export default Test;