import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState, useEffect, useMemo } from 'react';
import { set } from 'react-native-reanimated';

export default function telaHome({ route }) {

    const [idPost] = useState(route.params)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        function carregarPost() {
            const options = { method: 'GET' };

            fetch('http://localhost:5000/forum/post/1', options)
                .then(response => response.json())
                .then(resp => {
                    setPosts([resp])
                })
        }
        setTimeout(() => {
            carregarPost()
        }, 500)
    }, [])

    useEffect(() => {
        console.log(posts)
    }, [posts])

    return (
        <View style={styles.v}>
            <ScrollView style={styles.sv}>
                {
                    posts.map((p, index) => {
                        var date = new Date(p.dataPost)
                        var dt = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                        console.log(p)
                        return (
                            <View style={styles.card} key={index}>
                                <View style={styles.cardCima}>
                                    <Text style={styles.postMessage}>{p.postDuvida}</Text>
                                </View>
                                <View style={styles.cardBaixo} >
                                    <Text style={styles.infoUserNome} >{p.usuario}</Text>
                                    <Text style={styles.infoUserData} >{dt}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    v: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#486db8",
        width: "100%",
        paddingLeft: "50px",
        marginTop: "15px"
    },
    sv: {
        height: "100%",
        backgroundColor: "#486db8",
        width: "100%",
        paddingTop: "15px",

    },
    card: {
        height: "100px",
        width: "90%",
        backgroundColor: "#FFF",
        borderRadius: "10px",
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