import { BskyAgent } from '@atproto/api';

const agent = new BskyAgent({ service: import.meta.env.VITE_BLUESKY_SERVICE });

export const initializeBluesky = async () => {
  try {
    console.log('Attempting to connect to:', import.meta.env.VITE_BLUESKY_SERVICE);
    console.log('Using identifier:', import.meta.env.VITE_BLUESKY_IDENTIFIER);
    
    await agent.login({
      identifier: import.meta.env.VITE_BLUESKY_IDENTIFIER,
      password: import.meta.env.VITE_BLUESKY_PASSWORD,
    });
    
    console.log('Successfully logged in to Bluesky!');
    return agent;
  } catch (error) {
    console.error('Failed to initialize Bluesky:', error);
    throw error;
  }
};

export const searchPosts = async (query: string) => {
  try {
    const response = await agent.app.bsky.feed.searchPosts({
      q: query,
      limit: 20,
    });
    return response.data.posts;
  } catch (error) {
    console.error('Failed to search posts:', error);
    throw error;
  }
};

export const getPostThread = async (uri: string) => {
  try {
    const response = await agent.app.bsky.feed.getPostThread({ uri });
    return response.data.thread;
  } catch (error) {
    console.error('Failed to get thread:', error);
    throw error;
  }
};

export const getProfile = async (handle: string) => {
  try {
    const response = await agent.app.bsky.actor.getProfile({ actor: handle });
    return response.data;
  } catch (error) {
    console.error('Failed to get profile:', error);
    throw error;
  }
};