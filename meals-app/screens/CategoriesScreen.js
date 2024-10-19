import {FlatList,StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'
export default function CategoriesScreen({navigation}){
  function renderCategoryItem(itemData){
  function pressHandler(){
    navigation.navigate('mealsoverview',{categoryId:itemData.item.id});
  }
  return(<CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} navigation={navigation}/>);
}
  return(<FlatList data={CATEGORIES}
  keyExtractor={(item)=>item.id}
  renderItem={renderCategoryItem}
  numColumns={2}/>);
}
const styles = StyleSheet.create({
});