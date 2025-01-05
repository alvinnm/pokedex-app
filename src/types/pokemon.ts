export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    frontSprite: string;
    officialArtwork: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}
