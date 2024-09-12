function isPalindrome(s) {
  const stripped = s.replace(/[^\w]/gi, '');
  return (
    stripped.toLowerCase() ===
    stripped.toLowerCase().split('').reverse().join('')
  );
}
