import { Text, View } from "react-native";
import styles from '../style/style';
import { useFonts } from 'expo-font';


export default function Header() {

    const [loaded] = useFonts({
        Rye: require('../assets/fonts/Rye-Regular.ttf')
      });
    
      if(!loaded){
        return null;
      } 

    return(
        <View style={styles.header}>
            <Text style={{fontFamily: 'Rye', fontSize: 50, margin: 5, paddingBottom: 10}}>Mini-Yahtzee</Text>
        </View>
    )
}