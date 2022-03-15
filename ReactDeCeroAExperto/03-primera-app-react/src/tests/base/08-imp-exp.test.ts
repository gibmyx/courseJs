import {describe, expect, test} from "vitest";
import {getHeroeById, getHeroesByOwner} from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("pruebas en funciones de herues", () => {
    test("Debe retornar un heroe por id", () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id)
        expect(heroe).toBe(heroeData)
    })
    test("Debe retornar undefine si el heroe no existe", () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined)
    })

    test("Debe retornar un array de los heroes de DC", () => {
        const owner = "DC"
        const heroes = getHeroesByOwner(owner)
        const heroesData = heroes.filter(h => h.owner === owner )
        expect(heroes).toEqual(heroesData)
    })
    test("Debe retornar un array de los heroes de Marvel", () => {
        const owner = "Marvel"
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
    })
})