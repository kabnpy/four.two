export type CardSet = {
  title: string;
  slug: string;
  description: string;
  cards: Card[];
}

export type Card = {
  front: { heading: string; subheading?: string };
  back: { heading: string; description: string };
}

export type RatingType = "Manual" | "Again" | "Hard" | "Good" | "Easy";

export enum Rating {
  Manual = 0,
  Again = 1,
  Hard = 2,
  Good = 3,
  Easy = 4,
}