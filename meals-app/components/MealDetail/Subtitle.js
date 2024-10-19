import {View,Text,StyleSheet} from 'react-native';
export default function Subtitle({children}){
  return(<View style={styles.subtitleContainer}>
  <Text style={styles.subtitle}>{children}</Text>
  </View>);
}
const styles=StyleSheet.create({
    subtitle:{
    color:'#e2b497',
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  borderBottomColor:'white',
  borderBottomWidth:2,
  },
   subtitleContainer:{
    margin:4,
    padding:6,
    marginHorizontal:12,
    marginVertical:4,
    borderBottomColor:'#e2b497',
  borderBottomWidth:2,
  },
})