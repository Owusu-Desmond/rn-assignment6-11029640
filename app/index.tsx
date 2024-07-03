import ShoppingCard from "@/components/ShoppingCard";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  
  const shopLists = [
    {
      imageUrl: require('../assets/images/dress1.png'),
      name: 'Church Wear',
      desc: 'reversible angora cardigan',
      price: 120
    },
    {
      imageUrl: require('../assets/images/dress2.png'),
      name: 'Lamerei',
      desc: 'reversible angora cardigan',
      price: 120
    },
    {
      imageUrl: require('../assets/images/dress3.png'),
      name: '21WN',
      desc: 'reversible angora cardigan',
      price: 120
    },
    {
      imageUrl: require('../assets/images/dress4.png'),
      name: 'Lopo',
      desc: 'reversible angora cardigan',
      price: 120
    },
    {
      imageUrl: require('../assets/images/dress5.png'),
      name: '21WN',
      desc: 'reversible angora cardigan',
      price: 120
    },
    {
      imageUrl: require('../assets/images/dress6.png'),
      name: 'lamer',
      desc: 'reversible angora cardigan',
      price: 120
    },
  ]

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: '#fff', padding: 20}}>
          {/* nav section */}
          <View style={styles.nav}>
            <Image source={require('../assets/Menu.png')} />
            <Image source={require('../assets/Logo.png')} />
            <View style={[styles.iconsFlex, { gap: 30}]}>
              <Image source={require('../assets/Search.png')} />
              <Image source={require('../assets/shoppingBag.png')} />
            </View> 
          </View>

          {/* header section */}

          <View style={styles.header}>
            <Text style={{fontSize: 23}}>OUR STORY</Text>
            <View style={[styles.iconsFlex, {gap: 15}]}>
                <View style={styles.iconContainer}>
                  <Image source={require('../assets/Listview.png')} />
                </View>
                <View style={styles.iconContainer}>
                  <Image source={require('../assets/Filter.png')} />
                </View>
            </View>
          </View>

          {/* Shopping list */}
          <FlatList 
            contentContainerStyle={styles.lists}
            data={shopLists}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => (
                <ShoppingCard 
                  imageUrl={item.imageUrl}
                  name={item.name}
                  desc={item.desc}
                  price={item.price}
                />
              )
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconsFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10
  },
  iconContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lists: {
    // display: 'flex',
    // gap: 10,
  }
})