import React from 'react';
import { useBlueskyFeed } from '../hooks/useBluesky';

const TestHooks = () => {
  const queries = [
    { name: 'NYC Art', query: '"new york city" AND "art gallery"' },
    { name: 'NYC Events', query: '"new york city" AND (events OR shows)' }
  ];

  const { posts, loading, error, refetch } = useBlueskyFeed(queries, 60000); // Refresh every minute

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bluesky Feeds Test</h1>
        <button 
          onClick={refetch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg">
            <div className="text-sm text-blue-500">{post.feedName}</div>
            <div className="font-bold">{post.author.displayName} (@{post.author.handle})</div>
            <div className="mt-2">{post.text}</div>
            {post.media.length > 0 && (
              <div className="mt-2 grid grid-cols-2 gap-2">
                {post.media.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img.thumb} 
                    alt={img.alt || 'Post image'} 
                    className="rounded"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestHooks;