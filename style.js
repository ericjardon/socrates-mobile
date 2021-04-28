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
        color: "grey",
        fontSize: 32,
        textAlign: 'center',
    },
    titleContainer: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 120,
        textAlign: 'center',
        margin: 12,
        borderWidth: 1,
    },
    button: {
        marginTop: 30,
    }
});