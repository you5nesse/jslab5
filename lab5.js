function letterFinder(word, match) {
  if (typeof word !== "string") {
    console.log("Erreur: word doit être une chaîne de caractères.");
    return;
  }
  if (typeof match !== "string" || match.length !== 1) {
    console.log("Erreur: match doit être une seule lettre (1 caractère).");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
function letterFinderIgnoreCase(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    console.log("Paramètres invalides.");
    return;
  }

  const w = word.toLowerCase();
  const m = match.toLowerCase();

  for (let i = 0; i < w.length; i++) {
    if (w[i] === m) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinderIgnoreCase("Test", "t");
function letterPositions(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return [];
  }

  const positions = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      positions.push(i);
    }
  }
  return positions;
}

console.log(letterPositions("test", "t"));
function firstLetterPosition(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return -1;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) return i;
  }
  return -1;
}
