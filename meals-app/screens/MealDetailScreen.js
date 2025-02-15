import { Text, View, Image, StyleSheet,ScrollView,Button} from 'react-native';
import {useLayoutEffect} from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetailS from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List'; // Correct path

export default function MealDetailScreen({ route,navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  function headerButtonPressHandler(){
    console.log("button pressed");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button 
          title="Tap me!" 
          onPress={headerButtonPressHandler} 
        />
      ),
    });
  }, [navigation,headerButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailS
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    alignItems: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer:{
    alignItems:'center',
  },
  listContainer:{
    width:'80%',
  },
});
