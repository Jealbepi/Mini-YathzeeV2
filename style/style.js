import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  // Home screen before entering your name ----------------------------------------------------------

  buttonView: {
    alignItems: 'center',
    justifyContent:'center'
  },
  
  homeContainer: {
    backgroundColor: '#d5ffbd8f'
  },
  
  icon: {
    paddingBottom: 15
  },
  
  enterName: {
    paddingBottom: 100
  },

  textInput: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: '60%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#dfffd9'
  },

  enterName: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    paddingBottom: 10
  },
  buttonOk: {
    backgroundColor: "#749c5d",
    height: 50,
    width: 150,
    borderRadius: 15,
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 308,
  },
  
  //-------------------------------------------------------------------------------------------------
  // Home screen after entering your name, showing rules --------------------------------------------
  
  text: {
    fontSize: 16,
    margin: 8,
  },
  play: {
    fontSize: 24,
    padding: 15,
    color: 'white',
    backgroundColor: '#749c5d',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 80
  },
  player: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },

  //-------------------------------------------------------------------------------------------------
  // Header -----------------------------------------------------------------------------------------
  
  title: {
      fontWeight: 'bold',
      flex: 1,
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      paddingBottom: 20
  },
  header: {
      marginTop: 30,
      marginBottom: 15,
      flexDirection: 'row',
      fontSize: 40
  },

  //-------------------------------------------------------------------------------------------------
  // Footer -----------------------------------------------------------------------------------------
  
  footer: {
    position: 'absolute',
    bottom: 0,
    //marginTop: 200,
    backgroundColor: '#749c5d',
    flexDirection: 'row',
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  
  //-------------------------------------------------------------------------------------------------
  // Gameboard --------------------------------------------------------------------------------------
  
  gameboard: {
    textAlign:'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  gameboardText: {
    marginLeft: 20,
    fontSize: 20,
    marginBottom: 15
  },
  gameboardTextPlayer: {
    marginLeft: 20,
    fontSize: 20,
    marginBottom: 80
  },
  dices: {
    paddingBottom: 35
  },
  bonusText: {
    textAlign: 'center',
    fontSize: 15
  },
  pointsRow: {
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 7
  },
  buttonRestart: {
    backgroundColor: "#749c5d",
    height: 50,
    width: 150,
    borderRadius: 15,
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  
  //-------------------------------------------------------------------------------------------------
  // Scoreboard -------------------------------------------------------------------------------------

  dataTableText: {
    fontSize: 13
  },
  dataTableTextDate: {
    fontSize: 13,
    right: 15
  },
  dataTableTextPosition: {
    fontSize: 13,
    left: 17
  },
  dataTableTextPoints: {
    fontSize: 13,
    left: 5
  },
  scoreBoardEmpty: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 20
  },
  buttonClearScoreboard: {
    backgroundColor: "#749c5d",
    height: 50,
    width: 150,
    borderRadius: 15,
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 422,
  },
  titleMedium: {
    fontSize: 28,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  //-------------------------------------------------------------------------------------------------
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: "#749c5d",
    height: 50,
    width: 150,
    borderRadius: 15,
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center'
  },
});