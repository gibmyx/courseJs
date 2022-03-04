import {heroes, owner} from "../data/heroes";

export const getHeoreById = (id: number) => heroes.find(heroe => heroe.id === id)
export const getHeroeByOwner = (owner: string) => heroes.filter(heroes => heroes.owner === owner)
