import {View,Text,Pressable,Image,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetailS from './MealDetails';
export default function MealItem({id,title,imageUrl,duration,complexity,affordability}){
  const navigation=useNavigation();
  function mealItemHandler(){
     navigation.navigate('mealdetails',{
    mealId:id
  });
  }
  return(<View style={styles.mealItem}>
  <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={mealItemHandler}
      >
  <View style={styles.innerContainer}>
  <View>
  <Image source={{uri:imageUrl}} style={styles.image}/>
  <Text style={styles.title}>{title}</Text>
  </View>
  <MealDetailS duration={duration} affordability={affordability} complexity={complexity}/>
  </View>
  </Pressable>
  </View>);
}
const styles=StyleSheet.create({
    mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white', // Adds a background for better visibility
    elevation:4,
       shadowColor: 'black', // Adds shadow for iOS
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    },
    innerContainer:{
      borderRadius:8,
      overflow:'hidden',
    },
  image:{
    width:'100%',
    height:200,
  },
  title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:18,
    margin:8,
  },
    buttonPressed: {
    opacity: 0.75,
  },

})