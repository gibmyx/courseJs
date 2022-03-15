import {describe, expect, test} from "vitest";
import {getSaludo} from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string.ts", () => {
    test("getSaludo debe retornar hola gibmyx", () => {
        const nombre = "Gibmyx"
        const saludo = getSaludo(nombre)

        expect(saludo).toBe(`Hola ${nombre}`)
    })

    test("getSaludo debe de retornar Hola Carlos si no ahy agumento nombre", () => {

        const saludo = getSaludo()
        expect(saludo).toBe(`Hola Carlos`)
    })
})