import { TouchableHighlight, StyleSheet, Text, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const Botao = (props) => {

    const estilosBotao = [estilos.botao]
    if(props.duplo) estilosBotao.push(estilos.botaoDuplo)
    if(props.triplo) estilosBotao.push(estilos.botaoTriplo)
    if(props.operacao) estilosBotao.push(estilos.botaoOperacao)

    return (
        <TouchableHighlight
            onPress={() => props.onClick(props.label)}>
            <Text style={estilosBotao}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    botao: {
        fontSize: 50,
        width: width / 4,
        height: width / 4,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    botaoDuplo: {
        width: width/4 * 2
    },
    botaoTriplo: {
        width: width/4 * 3
    },

    botaoOperacao:{
        backgroundColor: '#ff8220',
        color: '#ffffff'

    }
})

export default Botao