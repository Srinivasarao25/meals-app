import { Text,StyleSheet,View,StatusBar,Button} from 'react-native';
import { Card } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
         headerStyle:{backgroundColor:'#351401'},
    headerTintColor:'white',
    contentStyle:{backgroundColor:'#3f2f25'}
    }}>
    <Stack.Screen name='mealscategories' component={CategoriesScreen}
    options={{title:'All categories',
 }}/>
    <Stack.Screen name='mealsoverview' component={MealsOverviewScreen}
    options={({route,navigation})=>{
      const catId=route.params.categoryId;
      return {
        title:catId
      };
    }}/>
    <Stack.Screen name="mealdetails" component={MealDetailScreen}/>
    </Stack.Navigator>
     </NavigationContainer>
     </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,               // Ensures the container takes up the full screen
    backgroundColor: '#24180f', // Applies the background color
  },
});
