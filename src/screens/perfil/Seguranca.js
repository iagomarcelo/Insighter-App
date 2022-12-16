import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../components/Colors';
import Toggle from '../../components/Switch';


export default function SegurancaScreen(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white }}>
        <View style={styles.header}>
            <Icon
              onPress={() =>{
                props.navigation.navigate("Home");
              }}
            name='keyboard-backspace'  size={25}   />
            <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}>Segurança</Text>
        </View>

        <Toggle/>
        
        
        
        <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      },
});