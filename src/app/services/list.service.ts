import { GameItem } from "../GameItem";

export class ListService {

    private items: GameItem[] = [
        new GameItem(1, "nome1", "descrizione1", "genere1", 1, 1, 1),
        new GameItem(2, "nome2", "descrizione2", "genere2", 2, 2, 2),
        new GameItem(3, "nome3", "descrizione3", "genere3", 3, 3, 3)
    ];

    getCharactersList(): GameItem[] {
        return this.items;
    }

    getGameById(id: number): GameItem {
        for (let item of this.items) {
            if (item.id == id) {
                return item.clone();
            }
        }
        return null;
    }

    getGameByName(name: string): GameItem {
        if (name) {
            for (let item of this.items) {
                if (item.name.toLowerCase() == name.toLowerCase()) {
                    return item.clone();
                }
            }
        }
        return null;
    }

    changeGame(gameItem: GameItem) {
        for (let item of this.items) {
            if (item.id == gameItem.id) {
                item.name = gameItem.name;
                item.annoUscita = gameItem.annoUscita;
                item.descrizione = gameItem.descrizione;
                item.genere = gameItem.genere;
                item.prezzo = gameItem.prezzo;
                item.rating = gameItem.rating;
            }
        }
    }

    checkModification(gameItem: GameItem) {
        if(!gameItem)return false;
        for (let item of this.items) {
            if (item.id == gameItem.id) {
                if (item.name == gameItem.name && item.genere == gameItem.genere && item.annoUscita == gameItem.annoUscita && item.descrizione == gameItem.descrizione && item.prezzo == gameItem.prezzo && item.rating == gameItem.rating)
                    return false;
                return true;
            }
        }
        return false;
    }
}