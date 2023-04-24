const team = {

    _players: [
      {firstName: 'Roger', lastName: 'Clemens', age: 39},
      {firstName: 'Jeff', lastName: 'Bostrom', age: 32},
      {firstName: 'Jim', lastName: 'Jumpin', age: 22}
    ],
  
    _games: [
      {opponent: 'Jets', teamPoints: 55, opponenetPoints: 45},
      {opponent: 'Patriots', teamPoints: 23, opponenetPoints: 7},
      {opponent: 'Giants', teamPoints: 10, opponenetPoints: 35}
    ],
  
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayers(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
     this.players.push(player);
    },
  
    addGames(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        oppenent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
    }
  };
  
  team.addPlayers('Daffy','Duck',76);
  console.log(team.players);
  
  team.addGames('49ers',22,100);
  console.log(team.games);