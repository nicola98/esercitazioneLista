import { GameItem } from "../GameItem";

export class ListService{

    private items: GameItem[]=[
        new GameItem(1, "nome1", "descrizione1", "genere1", 1, 1, 1),
        new GameItem(2, "nome2", "descrizione2", "genere2", 2, 2, 2),
        new GameItem(3, "nome3", "descrizione3", "genere3", 3, 3, 3)
    ];

    getCharactersList(): GameItem[]{
        return this.items;
    }

    getGameById(id: number){
        for(let item of this.items){
            if(item.id == id){
                return item;
            }
        }
    }
}