function supermemo(flashcard, grade) {
    let nextInterval;
    let nextRepetition;
    let nextEfactor;
  
    if (grade >= 3) {
      if (flashcard.repetition === 0) {
        nextInterval = 1;
        nextRepetition = 1;
      } else if (flashcard.repetition === 1) {
        nextInterval = 6;
        nextRepetition = 2;
      } else {
        nextInterval = Math.round(flashcard.interval * flashcard.efactor);
        nextRepetition = flashcard.repetition + 1;
      }
    } else {
      nextInterval = 1;
      nextRepetition = 0;
    }
  
    nextEfactor =
      flashcard.efactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  
    if (nextEfactor < 1.3) nextEfactor = 1.3;

    console.log("%d %f %f", nextInterval, nextRepetition, nextEfactor);
  
    return {
      nextInterval,
      nextRepetition,
      nextEfactor
    };
  }

  module.exports = supermemo;