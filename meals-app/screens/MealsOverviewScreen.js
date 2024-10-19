// import {MEALS} from '../data/dummy-data'
// import MealItem from '../components/CategoryGridTile';
// import {View,Text,StyleSheet,FlatList} from 'react-native';
// export default function MealsOverviewScreen({route}){
//   const catId=route.params.categoryId;
//   const displayedMeals=MEALS.filter((mealItem)=>{return mealItem.categoryIds.indexOf(catId)});
//   function renderMealItem(itemData){
//     return(<MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>);
//   }
//   return(<View style={styles.container}>
//   <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
//   </View>);
// }
// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     padding:16,
//   },
// })
import {useLayoutEffect} from 'react';import { MEALS,CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function MealsOverviewScreen({ route,navigation }) {
  const catId = route.params.categoryId;

  // Fix: Properly filter meals by categoryId
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) !== -1;
  });
useLayoutEffect(()=>{
    const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title;
  navigation.setOptions({
    title:categoryTitle
  });
},[ catId,navigation]);
  function renderMealItem(itemData) {
    const mealItemProps={
      id:itemData.item.id,
      title:itemData.item.title,
      imageUrl:itemData.item.imageUrl,
      duration:itemData.item.duration,
      complexity:itemData.item.complexity,
      affordability:itemData.item.affordability
    }
    return (
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
