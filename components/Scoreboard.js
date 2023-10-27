import { useState, useEffect } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import Header from './Header';
import Footer from './Footer';
import { NBR_OF_SCOREBOARD_ROWS, SCOREBOARD_KEY } from '../constants/Game';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/style';
import { LinearGradient } from 'expo-linear-gradient';

export default Scoreboard = ({ navigation }) => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getScoreboardData();
        });
        return unsubscribe;
    }, [navigation]);
    
    
    const getScoreboardData = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
            if (jsonValue !== null) {
                let tmpScores = JSON.parse(jsonValue);
                setScores(tmpScores);
            }
        }
        catch(e) {
            console.log('Readd error: ' + e)
        }
    }
    
    const clearScoreBoard = async() => {
        try {
            await AsyncStorage.clear()
            setScores([])
        }
        catch(e) {
            console.log('Clear error: ' + e)
        }
        console.log("Scoreboard was cleared")
    }
    
    scores.sort((a,b) => b.points - a.points)

    return(
        <ScrollView>
            <LinearGradient colors={['#beff988f', '#ffffff', '#beff988f']} style={styles.linearGradient}>
            <Header />
            <View style={styles.containerScoreboard}>
                <View>
                    { scores.length === 0 ?
                        <Text style={styles.scoreBoardEmpty}>Scoreboard is empty</Text>
                        :
                        (
                        <View style={styles.dataTableContainer}>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title><Text style={styles.dataTableHeaderText}>Position</Text></DataTable.Title>
                                    <DataTable.Title><Text style={styles.dataTableHeaderText}>Name</Text> </DataTable.Title>
                                    <DataTable.Title><Text style={styles.dataTableHeaderText}>Date</Text></DataTable.Title>
                                    <DataTable.Title><Text style={styles.dataTableHeaderText}>Time</Text></DataTable.Title>
                                    <DataTable.Title><Text style={styles.dataTableHeaderText}>Points</Text></DataTable.Title>
                                </DataTable.Header>
                                {scores.map((player, index) => (
                                index < NBR_OF_SCOREBOARD_ROWS && 
                                <View style={styles.dataTableRow} key={player.key}>
                                    <DataTable.Row>
                                        <DataTable.Cell><Text style={styles.dataTableTextPosition}>{index + 1}.</Text></DataTable.Cell>
                                        <DataTable.Cell><Text style={styles.dataTableText}>{player.name}</Text></DataTable.Cell>
                                        <DataTable.Cell><Text style={styles.dataTableTextDate}>{player.date}</Text></DataTable.Cell>
                                        <DataTable.Cell><Text style={styles.dataTableText}>{player.time}</Text></DataTable.Cell>
                                        <DataTable.Cell><Text style={styles.dataTableTextPoints}>{player.points}</Text></DataTable.Cell>
                                    </DataTable.Row>
                                </View>
                                ))}
                            </DataTable>
                        </View>
                        )
                    }
                </View>
            </View>
            <View style={styles.buttonView}>
                <Pressable style={styles.buttonClearScoreboard} onPress={() => clearScoreBoard()}>
                        <Text style={styles.buttonText}>CLEAR SCOREBOARD</Text>
                </Pressable>
            </View>
            <Footer />
            </LinearGradient>
        </ScrollView>
    )
}