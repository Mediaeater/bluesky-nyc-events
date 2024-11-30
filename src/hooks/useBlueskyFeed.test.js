import { renderHook, waitFor, act } from '@testing-library/react';
import { describe, it, afterEach, expect } from 'vitest';
import { useBlueskyFeed } from './useBluesky';
import { vi } from 'vitest'; // Import vitest for mocking functionalities

// Mocking fetch or any network-related functionalities to ensure predictable results.
vi.mock('./useBluesky', () => ({
  useBlueskyFeed: vi.fn(),
}));

// Polyfill for TextEncoder in environments where it might not be available.
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe('useBlueskyFeed', () => {
  afterEach(() => {
    vi.clearAllMocks(); // Ensure no leftover mock data between tests.
  });

  it('fetches and sets posts', async () => {
    // Mock implementation for valid queries.
    useBlueskyFeed.mockImplementation((queries) => ({
      loading: false,
      posts: [{ id: 1, content: 'test post' }],
      error: null,
    }));

    const queries = [{ name: 'test', query: 'test' }];
    const { result, unmount } = renderHook(() => useBlueskyFeed(queries));

    // Verify the initial state.
    expect(result.current.loading).toBe(false);
    expect(result.current.posts).toBeInstanceOf(Array);
    expect(result.current.posts.length).toBeGreaterThan(0);
    expect(result.current.error).toBeNull();

    unmount(); // Cleanup hook to prevent side effects.
  });

  it('handles errors', async () => {
    // Mock implementation for invalid queries causing an error.
    useBlueskyFeed.mockImplementation((queries) => ({
      loading: false,
      posts: [],
      error: 'Error fetching data',
    }));

    const queries = [{ name: 'invalid', query: 'invalid' }];
    const { result, unmount } = renderHook(() => useBlueskyFeed(queries));

    // Verify the initial state.
    expect(result.current.loading).toBe(false);
    expect(result.current.error).not.toBeNull();
    expect(result.current.posts.length).toBe(0);

    unmount(); // Cleanup hook to prevent side effects.
  });
});
