import { render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"
import { useListaDeParticipante } from "../state/hooks/useListaDeParticipante"

jest.mock('../state/hooks/useListaDeParticipante', () => {
    return {
        useListaDeParticipante: jest.fn()
    }
})

describe('Uma lista vazia de participantes', () => {

    beforeEach(() => {
        (useListaDeParticipante as jest.Mock).mockReturnValue([])
    })

   test('Deve renderizar a lista sem elementos', () => {
    render(
        <RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>)

        const itens = screen.queryAllByRole('listitem')

        expect(itens).toHaveLength(0)
   })

})


describe('Uma lista preenchida de participantes', () => {
    const participantes = ['Ana', 'Carlos']

   beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue(participantes)
})

   test('Deve renderizar a lista preenchida de participantes', () => {

    render(
        <RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>)

        const itens = screen.queryAllByRole('listitem')

        expect(itens).toHaveLength(participantes.length)
   })

})
