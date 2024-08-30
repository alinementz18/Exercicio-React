import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themas";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
    },
    boxTop: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid: {
        height: Dimensions.get('window').height / 2,
        width: '100%',
        paddingHorizontal: 37,
        justifyContent: 'center',
    },
    boxBottom: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        aspectRatio: '4/3',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20,
    },
    titleInput: {
        marginLeft: 10,
        color: themas.colors.lightGray,
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialButton: {
        marginHorizontal: 15,
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.gray,
    },
});
