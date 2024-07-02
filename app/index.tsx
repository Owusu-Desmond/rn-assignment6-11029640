import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
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
        </View>
          
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
  }
})