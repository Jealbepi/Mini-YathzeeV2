import { useState } from "react";
import { TextInput, Text, View, Pressable, Keyboard, ScrollView } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Footer from './Footer';
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS } from "../constants/Game";
import styles from '../style/style';
import { LinearGradient } from 'expo-linear-gradient';

export default Home = ({ navigation }) => {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0 ) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    return(
        <ScrollView style={styles.homeContainer}>
            <LinearGradient colors={['#beff988f', '#ffffff', '#beff988f']} style={styles.linearGradient}>
            <Header />
            <View style={styles.buttonView}>
                <MaterialCommunityIcons style={styles.icon} name="dice-multiple-outline" size={75} color="green"/>
                {!hasPlayerName ?
                    <>
                        <Text style={styles.enterName}>Please enter your name</Text>
                        <TextInput 
                            label={'Player name'}
                            mode="outlined"
                            onChangeText={setPlayerName} 
                            autoFocus={true} 
                            style={styles.textInput} 
                        />
                        <View style={styles.buttonView}>
                            <Pressable style={styles.buttonOk} onPress={() => handlePlayerName(playerName)}>
                                <Text style={styles.buttonText}>OK</Text>
                            </Pressable>
                        </View>
                    </>
                    :
                    <>
                        <Text style={styles.titleMedium}>Rules of the game...</Text>
                        <Text style={styles.text} multiline="true">
                            THE GAME: Upper section of the classic Yahtzee dice game. 
                            You have {NBR_OF_DICES} dices and for every dice you have <></>
                            {NBR_OF_THROWS} throws. After each throw you can keep dices 
                            in order to get same dice spot counts as many as possible. 
                            In the end of the turn you must select your points from <></>
                            {MIN_SPOT} to {MAX_SPOT}. Game ends when all points have been selected.
                            The order for selecting points is up to you. 
                        </Text>
                        <Text style={styles.text} multiline="true">
                            POINTS: After each turn, the game calculates the sum for the
                            dices you selected. Only the dices having the same spot count 
                            are calculated. You can not select same points 
                            from {MIN_SPOT} to {MAX_SPOT} again.
                        </Text>
                        <Text style={styles.text} multiline="true">
                            GOAL: To get as much points as possible. <></>
                            {BONUS_POINTS_LIMIT} points is the limit of getting the
                            bonus which gives you {BONUS_POINTS} points more.
                        </Text>
                        <Text style={styles.player}>Good luck, {playerName}!</Text>
                        <Pressable onPress={() => navigation.navigate('Gameboard', {player: playerName})}>
                            <Text style={styles.play}>PLAY</Text>
                        </Pressable>
                    </>
                }
            </View>
            <Footer />
            </LinearGradient>
        </ScrollView>
    )

}