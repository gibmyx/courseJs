import {describe, expect, test} from "vitest";
import {getHeroeByIdAsync} from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("pruebas con primesa", () => {

    test("getHeroeByIdAsync debe retornar un heroe async", (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });


    test("getHeroeByIdAsync debe retornar un heroe async", (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe("No se pudo encontrar el héroe")
                done();
            });
    });

});