import React from "react";
import {describe, test, expect} from "vitest";

import PrimeraApp from "../PrimeraApp";
import {shallow} from "enzyme";

describe('Prueba en <PrimeraApp />', () => {
    test('debe mostrar el mensaje de Hola, soy Goku', () => {
        const saludo = "Hola, soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = "Hola, soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wrapper = shallow(<PrimeraApp
            saludo={saludo}
            subtitulo={subtitulo}
        />)

        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe(subtitulo)
    })
})
