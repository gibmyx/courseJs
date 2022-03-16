import React from "react";
import {beforeEach, describe, expect, test} from "vitest";
import {shallow} from "enzyme";
import CounterApp from "../component/CounterApp";

describe('Pruebas en <CounterApp/>', () => {
    let wrapper = shallow(<CounterApp value={100}/>);
    beforeEach(() => {
        wrapper = shallow(<CounterApp value={100}/>);
    })

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('El valor por defaulf debe ser 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>)
        const valorcounter = wrapper.find('h2').text().trim();
        expect(valorcounter).toBe('100');
    })

    test('Debe de incrementar con el Boton +1', () => {
        console.log( wrapper.find('button'))
        wrapper.find('button').at(0).simulate('click');
        const valorcounter = wrapper.find('h2').text().trim();
        expect(valorcounter).toBe('101');
    })

    test('Debe de decrementar con el Boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const valorcounter = wrapper.find('h2').text().trim();
        expect(valorcounter).toBe('99');
    })

    test('Debe de colocar el valor por defecto con el btn rest', () => {
        const wrapper = shallow(<CounterApp value={200}/>)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        const valorCounter = wrapper.find('h2').text().trim();
        expect(valorCounter).toBe('202');

        wrapper.find('button').at(1).simulate('click');
        const valorCounterReset = wrapper.find('h2').text().trim();
        expect(valorCounterReset).toBe('200');
    })
})