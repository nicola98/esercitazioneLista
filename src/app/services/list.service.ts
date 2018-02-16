import { GameItem } from "../GameItem";

export class ListService{
    getCharactersList(): GameItem[]{
        let items: GameItem[]=[];
        items.push(new GameItem(1, "nome1", "descrizione1", "genere1", 1, 1, 1));
        items.push(new GameItem(2, "nome2", "descrizione2", "genere2", 2, 2, 2));
        items.push(new GameItem(3, "nome3", "descrizione3", "genere3", 3, 3, 3));
        return items;
    }
}