import { StyleSheet, Text, View } from 'react-native';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.botoes}>

        <Botao label={"AC"} triplo/>
        <Botao label={"/"} operacao/>

        <Botao label={"7"}/>
        <Botao label={"8"}/>
        <Botao label={"9"}/>
        <Botao label={"*"}operacao/>
       
        <Botao label={"4"}/>
        <Botao label={"5"}/>
        <Botao label={"6"}/>
        <Botao label={"-"} operacao/>
        
        <Botao label={"1"}/>
        <Botao label={"2"}/>
        <Botao label={"3"}/>
        <Botao label={"+"} operacao/>

        <Botao label={"0"} duplo/>
        <Botao label={"."}/>
        <Botao label={"="} operacao/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap'
}
});
