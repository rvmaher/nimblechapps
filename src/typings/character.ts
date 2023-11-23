type RootResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
};

type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Meta;
  location: Meta;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Meta = {
  name: string;
  url: string;
};

export type {Character, RootResponse};
