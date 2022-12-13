import { Text, View } from 'react-native';

export default function Chamado(props) {
    const { resp, user, data, tag } = props;

    return (
        <View style={styles.cardComentario}>
            <View style={styles.cardCima}>
                <Text style={styles.postMessage}>Isso é aquilo outro</Text>
            </View>
            <View style={styles.cardBaixo} >
                <Text style={styles.infoUserNome} >Felipao</Text>
                <Text style={styles.infoUserData} >24/12/1980</Text>
            </View>
        </View>

    )
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardComentario: {
        height: "80px",
        width: "80%",
        borderLeftWidth: "2px",
        borderColor: "#000",
        backgroundColor: "#cacbcc",
        borderRadius: "3px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    cardCima: {
        width: "100%",
        padding: "5px"
    },
    cardBaixo: {
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    tag: {
        height: "140%",
        width: "30%",
        backgroundColor: "#064365",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "10pt",
        fontWeight: "600",
        borderRadius: "5px",
        color: "#fff"
    },
    postMessage: {
        fontWeight: 'bold',
        alignItems: 'center'
    },
    infoUserNome: {
        fontSize: "80%",
        fontWeight: "600",
        letterSpacing: "1px",
    },
    infoUserData: {
        fontWeight: "500"
    },

});