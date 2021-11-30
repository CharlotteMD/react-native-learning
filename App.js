import * as React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Recipes"
      component={RecipeScreen}
    />
    <Tab.Screen
      name="Ingredients"
      component={IngredientsScreen}
    />
  </Tab.Navigator>
)

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
      <BottomNavigator />
    </SafeAreaView>
  </NavigationContainer>
);

export default App;

const RecipeScreen = () => (
  <View>
    <Text style={recipeStyles.heading}>My Favourite Recipes</Text>
    <View style={recipeStyles.body}>
      <ScrollView>
        {data.recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipeName={recipe.recipeName}
            ingredients={recipe.ingredients}
            image={'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80'}
          />
        ))}
      </ScrollView>
    </View>
  </View>
)
const IngredientsScreen = () => (
  <View>
    <Text style={recipeStyles.heading}>My Ingredients</Text>
    <View style={recipeStyles.body}>
      <ScrollView>
        {data.recipes.map(recipe => (
          <View key={recipe.id}>
            {recipe.ingredients.map(ingredient => (
              <Text>{ingredient}</Text>  
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
)

const recipeStyles = StyleSheet.create({
  heading: {
    fontSize: 32,
    textAlign: 'center',
    padding: 24,
  },
  body: {
    height: '90%',
  },
})

const RecipeCard = (props) => (
  <View style={recipeCardStyles.layout} key={props.key}>
    <Image 
      style={recipeCardStyles.image} 
      source={{
        uri: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80',
      }}/>    
      <View style={recipeCardStyles.content} >
        <Text style={recipeCardStyles.title} >
          {props.recipeName}
        </Text>
        {props.ingredients.map(ingredient => (
          <Text style={recipeCardStyles.items}>{ingredient}</Text>  
        ))}
    </View>
  </View>
)

const recipeCardStyles = StyleSheet.create({
  layout: {
    margin: 16,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 12,
  },
  content: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  title: {
    fontWeight: 'bold'
  },
  items: {
    textTransform: 'capitalize',
  }
})

const data = {
  recipes: [
    { id: 1,
      recipeName: 'Carbonara',
      ingredients: ['pasta', 'creme fraiche', 'cheese', 'pancetta']
    },
    { id: 2,
      recipeName: 'Bolognaise',
      ingredients: ['pasta', 'tomatoes', 'cheese', 'onion']
    },
    { id: 3,
      recipeName: 'Fajitas',
      ingredients: ['peppers', 'onions', 'cheese', 'peppers']
    },
    { id: 4,
      recipeName: 'Shepherd\'s Pie',
      ingredients: ['potato', 'tomato', 'cheese', 'lamb']
    },
    { id: 5,
      recipeName: 'Risotto',
      ingredients: ['rice', 'peas', 'creme fraiche', 'onions']
    },
    { id: 6,
      recipeName: 'Curry',
      ingredients: ['chicken', 'curry powder', 'creme fraiche', 'rice']
    },
    { id: 7,
      recipeName: 'Stir fry',
      ingredients: ['noodles', 'peppers', 'hoisin sauce', 'onions']
    },

  ]
}