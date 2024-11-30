import { useState, useEffect } from 'react';
import { blueskyAPI } from '../services/api';

export const useBlueskyFeed = (queries, refreshInterval = 300000) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    let intervalId;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const allPosts = await Promise.all(
          queries.map(async (query) => {
            const queryPosts = await blueskyAPI.searchFeed(query.query);
            return queryPosts.map(post => ({ ...post, feedName: query.name }));
          })
        );

        if (mounted) {
          setPosts(allPosts.flat().sort((a, b) => 
            new Date(b.createdAt) - new Date(a.createdAt)
          ));
        }
      } catch (err) {
        if (mounted) {
          setError(err);
          console.error('Feed Error:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    if (refreshInterval > 0) {
      intervalId = setInterval(fetchPosts, refreshInterval);
    }

    return () => {
      mounted = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [queries, refreshInterval]);

  const refetch = async () => {
    setLoading(true);
    try {
      const allPosts = await Promise.all(
        queries.map(async (query) => {
          const queryPosts = await blueskyAPI.searchFeed(query.query);
          return queryPosts.map(post => ({ ...post, feedName: query.name }));
        })
      );
      setPosts(allPosts.flat().sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      ));
    } catch (err) {
      setError(err);
      console.error('Feed Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    posts,
    loading,
    error,
    refetch
  };
};

export const useBlueskyProfile = (handle) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profileData = await blueskyAPI.getUserProfile(handle);
        if (mounted) {
          setProfile(profileData);
        }
      } catch (err) {
        if (mounted) {
          setError(err);
          console.error('Profile Error:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    if (handle) {
      fetchProfile();
    }

    return () => {
      mounted = false;
    };
  }, [handle]);

  return { profile, loading, error };
};