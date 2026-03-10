function letterFinder(word, match) {
  if (typeof word !== "string") {
    console.log("Erreur : word doit être une chaîne de caractères");
    return;
  }

  if (typeof match !== "string" || match.length !== 1) {
    console.log("Erreur : match doit être une seule lettre");
    return;
  }
  const w = word.toLowerCase();
  const m = match.toLowerCase();

  for (let i = 0; i < w.length; i++) {
    if (w[i] === m) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("No match found at", i);
    }
  }
}
letterFinder("Test", "t");