import {describe, expect, test} from "vitest";
import {getUser, getUsuarioActivo} from "../../base-pruebas/05-funciones";

describe("Pruebas 05-funciones", () => {
    test("getUser debe retornar un objeto", () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()

        expect(user).toEqual(userTest)
    })

    test("getUsuarioActivo debe retornar un objeto", () => {
        const username = "verlumyx"
        const userTest = {
            uid: 'ABC567',
            username: username
        }
        const user = getUsuarioActivo(username)

        expect(user).toEqual(userTest)
    })
})