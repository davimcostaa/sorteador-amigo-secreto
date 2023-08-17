import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipante } from "../state/hooks/useListaDeParticipante";
import { useResultadoDoSorteio } from "../state/hooks/useResultadoDoSorteio";
import Sorteio from "./Sorteio";

jest.mock('../state/hooks/useListaDeParticipante', () => {
    return {
        useListaDeParticipante: jest.fn()
    }
})

jest.mock('../state/hooks/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn()
    }
})

describe('na pagina de sorteio', () => {

    const participantes = [
        'Ana',
        'Catarina',
        'Davi'
    ]

    const resultado = new Map([
        ['Ana', 'Catarina'],
        ['Catarina', 'Davi']
    ])

    beforeEach(() => {
        (useListaDeParticipante as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado)
    })

    test('todos os participantes podem exibir o amigo secreto', () => {
        
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length)
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Selecione o seu nome')

        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()
    })

})