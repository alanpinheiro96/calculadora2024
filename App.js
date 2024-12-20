import { useState } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native'

import Botao from "./components/Botao"
import Visor from "./components/Visor"

const estadoInicial = {
  valorVisor: '0',
  limparVisor: false,
  operacao: null,
  valores: [0, 0],
  posicaoCorrente: 0
}

let estadoTemp = {
  valorVisor: '0',
  limparVisor: false,
  operacao: null,
  valores: [0, 0],
  posicaoCorrente: 0
}

export default function App() {

  const [estadoCalculadora, setEstadoCalculadora] = useState({...estadoInicial})

  adicionarDigito = n => {
    if(n === '.' && estadoCalculadora.valorVisor.includes('.')){
      return
    }

    const limparVisor = estadoCalculadora.valorVisor === '0' || estadoCalculadora.limparVisor
    const valorCorrente = limparVisor ? '' : estadoCalculadora.valorVisor
    const valorVisor = valorCorrente + n

    if(n !== '.') {
      const novoValor = parseFloat(valorVisor)
      const valores = estadoCalculadora.valores
      valores[estadoCalculadora.posicaoCorrente] = novoValor
    }

    setEstadoCalculadora({...estadoCalculadora, valorVisor, limparVisor: false});
  }

  limparMemoria = () => {
    setEstadoCalculadora({...estadoInicial})
  }

  setOperacao = operacao => {
    if(estadoCalculadora.posicaoCorrente === 0) {
      setEstadoCalculadora({...estadoCalculadora, operacao, posicaoCorrente: 1, limparVisor: true})
    } else {
      const ehIgual = operacao === '='
      const valores = [...estadoCalculadora.valores]

      try {
        valores[0] = eval(`${valores[0]} ${estadoCalculadora.operacao} ${valores[1]}`)
      } catch (error) {
        valores[0] = estadoCalculadora.valores[0]
      }

      valores[1] = 0
      setEstadoCalculadora({
        valorVisor: valores[0],
        operacao: ehIgual ? null : operacao,
        posicaoCorrente: ehIgual ? 0 : 1,
        limparVisor: !ehIgual,
        valores
      })
    }
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Visor valor={estadoCalculadora.valorVisor}/>
      <View style={estilos.botoes}>
        <Botao label="AC" triplo onClick={limparMemoria} />
        <Botao label="/"  operacao onClick={setOperacao} />
        <Botao label="7" onClick={adicionarDigito} />
        <Botao label="8" onClick={adicionarDigito}/>
        <Botao label="9" onClick={adicionarDigito}/>
        <Botao label="*" operacao onClick={setOperacao}/>
        <Botao label="4" onClick={adicionarDigito}/>
        <Botao label="5" onClick={adicionarDigito}/>
        <Botao label="6" onClick={adicionarDigito}/>
        <Botao label="-" operacao onClick={setOperacao}/>
        <Botao label="1" onClick={adicionarDigito}/>
        <Botao label="2" onClick={adicionarDigito}/>
        <Botao label="3" onClick={adicionarDigito}/>
        <Botao label="+" operacao onClick={setOperacao}/>
        <Botao label="0" duplo onClick={adicionarDigito}/>
        <Botao label="." onClick={adicionarDigito}/>
        <Botao label="=" operacao onClick={setOperacao}/>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  botoes: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});