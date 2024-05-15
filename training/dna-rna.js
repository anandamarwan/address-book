const DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((letter) => (letter === "T" ? "U" : letter))
    .join("");
