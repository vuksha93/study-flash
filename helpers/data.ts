const placeholders = [
  "Explain React Native in simple terms",
  "Give me 3 dinner ideas with chicken",
  "What’s the difference between useState and useEffect?",
  "Write a short poem about coffee",
  "Suggest a 20-minute home workout",
  "Best fantasy captain for this week?",
];

export const getRandomPlaceholder = () => {
  return placeholders[Math.floor(Math.random() * placeholders.length)];
};
