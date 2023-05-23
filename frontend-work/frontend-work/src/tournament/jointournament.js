import React from 'react'
import { useParams } from 'react-router-dom'
const socket  = require('../connection/socket').socket

/**
 * 'Join game' is where we actually join the game room. 
 */


const JoinTournamentGameRoom = (tournamentId, userName, isCreator) => {
    /**
     * For this browser instance, we want 
     * to join it to a gameRoom. For now
     * assume that the game room exists 
     * on the backend. 
     *  
     * 
     * TODO: handle the case when the game room doesn't exist. 
     */
    const tidData = {
        tournamentId : tournamentId,
        userName : userName,
        isCreator: isCreator
    }
    socket.emit("playerJoinTournament", tidData)
}
  
  
const JoinTournament = (props) => {
    /**
     * Extract the 'gameId' from the URL. 
     * the 'gameId' is the gameRoom ID. 
     */
    const { tournamentid } = useParams()
    JoinTournamentGameRoom(tournamentid, props.userName, props.isCreator)
    return <div>
        <h1 style = {{textAlign: "center"}}>Welcome to Chess with Friend!</h1>
        <h3 style = {{textAlign: "center"}}>Made with ❤️ by <a href = 'https://Unavailable/' target = '_blank'>J</a>. Subscribe to my <a href = 'https://unavailable/' target = '_blank'>YouTube channel</a>. Follow me on <a href = 'https://unavailable' target = '_blank'>Instagram</a>.</h3>
    </div>
}

export default JoinTournament
  
