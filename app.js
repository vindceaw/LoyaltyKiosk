'use strict';



// creating object to save members details
const authMembers ={
  auth00001:{ 
    emailAdd: 'vindce@gmail.com',
    password: 'Va1234567',
    freeGame: 1,
    earnedGame: 4,
    gender: 'male',
    cardStatus: 'Premier',
    statusPts: 50
  },

  auth00002:{
    emailAdd: 'jasonttt@gmail.com',
    password: 'jttt123',
    freeGame: 1,
    earnedGame: 2,
    gender: 'male',
    cardStatus: 'Premier',
    statusPts: 50
  }
};

//checking the credentials of authMembers
//const authMembersNum= Object.keys(authMembers).length;
const emailAddEntered = document.getElementById('defaultForm-email').innerText;

const checkLogin = () => {
  for (const member in authMembers){
    if ( emailAddEntered === authMembers[member].emailAdd){
      
      console.log('vindce you made it');
      console.log(emailAddEntered)
    } else {
      //console.log(authMembers[member].emailAdd);
      console.log('jialat liao');
      console.log(emailAddEntered);
      document.getElementById('defaultForm-email').innerText="fuck you";
    }
  }
};
//TESTING MODE
  // emailAddEntered='jasonttt@gmail.com'
  // checkLogin(emailAddEntered);
document.getElementById('btn-ModalLogin').addEventListener('click', function (){
  console.log(emailAddEntered);
});