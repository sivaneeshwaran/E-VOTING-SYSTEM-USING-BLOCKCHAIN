export function detectFraud(user) {
  if (user.includes("bot") || user.length < 3) {
    return true;
  }
  return false;
}