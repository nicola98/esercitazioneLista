export class GameItem{
    id: number;
    name: string;
    descrizione: string;
    genere: string;
    rating: number;
    prezzo: number;
    annoUscita: number;

    constructor(id: number = undefined, name: string = "", descrizione: string = "", genere: string="", rating: number=undefined, prezzo: number=undefined, annoUscita: number=undefined){
        this.id = id;
        this.name = name;
        this.descrizione =descrizione; 
        this.genere = genere;
        this.rating = rating;
        this.prezzo =prezzo; 
        this.annoUscita =annoUscita; 
    }
}
