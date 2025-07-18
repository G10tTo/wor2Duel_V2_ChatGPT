/* Codex added "assert { type: 'json' }" to import nounList from JSON file.
import nounList from '../assets/valid_nouns_4-10.json' assert { type: 'json' };  // D4_T9

// Verify if a word is valid
export const isValidWord = async (word) => {
  return word.length >= 4 && word.length <= 10 && nounList.includes(word.toLowerCase());
};

// Get words that start with a prefix
export const getPossibleWords = async (prefix) => {
  return nounList.filter(word => word.startsWith(prefix.toLowerCase()));
};


It didn't work so I reverted to using readFileSync.

npm test
*/
let nounList;

if (typeof window !== 'undefined') {
  // Ambiente browser
  nounList = await import('../assets/valid_nouns_4-10.json').then(mod => mod.default);
} else {
  // Ambiente Node
  const fs = await import('fs');
  nounList = JSON.parse(
    fs.readFileSync(new URL('../assets/valid_nouns_4-10.json', import.meta.url))
  );
}

export const isValidWord = async (word) => {
  return word.length >= 4 && word.length <= 10 && nounList.includes(word.toLowerCase());
};

export const getPossibleWords = async (prefix) => {
  return nounList.filter(word => word.startsWith(prefix.toLowerCase()));
};