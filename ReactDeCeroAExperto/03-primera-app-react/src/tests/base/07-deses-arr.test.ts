import {describe, expect, test} from "vitest";
import {retornaArreglo} from "../../base-pruebas/07-deses-arr";

describe("Prueba 07-desestructuración", () => {
    test("debe de retornar un strin y un numero", () => {
        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
    })
})