import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257E5',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 40,
    },

    header: {   
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingRight: 40
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
        marginLeft: 40,
        marginTop: -15
    }
});

export default styles;