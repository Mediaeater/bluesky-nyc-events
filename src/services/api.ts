import { initializeBluesky, searchPosts, getPostThread, getProfile } from './bluesky';

class BlueskyAPI {
  constructor() {
    this.initialized = false;
  }

  async init() {
    if (!this.initialized) {
      await initializeBluesky();
      this.initialized = true;
    }
  }

  async searchFeed(query: string) {
    await this.init();
    const posts = await searchPosts(query);
    return this.processPosts(posts);
  }

  async getThread(postUri: string) {
    await this.init();
    const thread = await getPostThread(postUri);
    return thread;
  }

  async getUserProfile(handle: string) {
    await this.init();
    const profile = await getProfile(handle);
    return profile;
  }

  processPosts(posts: any[]) {
    return posts.map(post => ({
      id: post.uri,
      text: post.record.text,
      author: {
        did: post.author.did,
        handle: post.author.handle,
        displayName: post.author.displayName,
        avatar: post.author.avatar,
      },
      createdAt: post.indexedAt,
      media: this.processMedia(post),
      likes: post.likeCount,
      reposts: post.repostCount,
      replies: post.replyCount,
    }));
  }

  processMedia(post: any) {
    if (!post.embed?.images) return [];
    
    return post.embed.images.map((image: any) => ({
      thumb: image.thumb,
      fullsize: image.fullsize,
      alt: image.alt,
    }));
  }
}

export const blueskyAPI = new BlueskyAPI();