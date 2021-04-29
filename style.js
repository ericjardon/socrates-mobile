import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',

    },

    pageContainer: {
        backgroundColor: '#ffff',
        height: '100%',
        width: '100%',
    },

    title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 32,
        textAlign: 'center',
    },

    titleContainer: {
        position: 'absolute',
        top: '10%',
        width: '100%',
        paddingHorizontal: 8,
        alignItems: 'center',
    },

    subtitle: {
        fontSize: 22,
        textAlign: 'center',
    },

    subtitleContainer: {
        marginTop: '15%',
        paddingHorizontal: 8,
    },

    input: {
        textAlign: 'center',
        width: 250,
        margin: 12,
        borderWidth: 1,
        fontSize: 28,
    },

    inputcontainer: {
        borderColor: 'blue',
        borderWidth: 3,
    },

    buttonContainer: {
        marginTop: "10%",
    }
});