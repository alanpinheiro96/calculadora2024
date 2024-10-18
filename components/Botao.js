import { TouchableHighlight, StyleSheet, Text, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const Botao = (props) => {
    return (
        <TouchableHighlight
            onPress={() => console.log(props.label)}>
            <Text style={estilos.Botao}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    Botao: {
        fontSize: 50,
        width: width / 4,
        height: width / 4,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    }
})

export default Botao