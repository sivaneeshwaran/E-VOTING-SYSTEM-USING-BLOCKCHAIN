export function encryptVote(vote) {
  return btoa(vote); // simulate encryption
}

export function generateZKP(vote) {
  return "ZKP_" + btoa(vote + Date.now());
}