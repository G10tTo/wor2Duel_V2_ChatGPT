/* D4_T9 ---> */
import { test } from 'node:test';
import assert from 'assert/strict';
import { getPossibleWords } from './dictionary.js';

// Test that the function returns words starting with the prefix
test('getPossibleWords returns words starting with prefix', async () => {
  const prefix = 'aba';
  const words = await getPossibleWords(prefix);
  assert.ok(words.length > 0, 'No words returned');
  for (const w of words) {
    assert.ok(w.startsWith(prefix));
  }
});

// Test that the function returns empty array when no word matches
test('getPossibleWords returns empty array when no words match', async () => {
  const words = await getPossibleWords('zzzz');
  assert.deepStrictEqual(words, []);
});
/*
<--- */