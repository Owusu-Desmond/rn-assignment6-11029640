import { ComponentProps } from "react"
import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native"

type ShoppingCardProps = ComponentProps<typeof View> & {
    imageUrl: any,
    name: string,
    desc: string,
    price: number
}  

const ShoppingCard = ({imageUrl, name, desc, price}: ShoppingCardProps) => {
    return (
        // <View>
            <View style={styles.cardContainer}>
                <ImageBackground style={styles.imageContainer} source={imageUrl}>
                    <TouchableHighlight
                        style={styles.addButton}
                    >
                        <Image source={require('../assets/add_circle.png')} />
                    </TouchableHighlight>
                </ImageBackground>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 30,
        display: 'flex',
        gap: 3,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: 155,
        height: 200,
    },
    addButton: {
        margin: 10
    },
    name: {
        fontSize: 18,
        fontWeight: '400'
    },
    desc: {
        fontSize: 13,
        color: 'gray'
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
        color: '#dc8460'
    },
})

export default ShoppingCard;