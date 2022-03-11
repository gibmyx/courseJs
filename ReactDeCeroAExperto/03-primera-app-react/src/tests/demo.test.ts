import {expect, test, describe} from "vitest";

describe('Pruebas en el archivo demo.test.ts', () => {
    test("debe de ser iguales los string", () => {

        const mensaje = "Hola mundo";
        const mensaje2 = "Hola mundo";
        expect(mensaje).toBe(mensaje2)
    })
})