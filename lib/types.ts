// TypeScript types for the pet game

type Pet = {
    id: string;
    name: string;
    species: 'cat' | 'dog' | 'fish' | 'bird';
    age: number;
    health: number;
    happiness: number;
};

interface GameState {
    pets: Pet[];
    currentPlayer: string;
    score: number;
}

export type { Pet, GameState };