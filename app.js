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

//disable back button

// function preventBack() {
//   window.history.forward();
// }
//checking the credentials of authMembers
//const authMembersNum= Object.keys(authMembers).length;
// console.log(emailAddEntered);
const checkLogin = () => {
  const emailAddEntered = document.getElementById('defaultForm-email').value;
  const passwordEntered = document.getElementById('defaultForm-pass').value;

  for (const member in authMembers){
    if (emailAddEntered === authMembers[member].emailAdd){
      if(passwordEntered === authMembers[member].password){
        $('#modalLoginForm').modal('hide');
        window.location.assign("/profile.html"); 
      } else {
        // alert('Wrong Password!');
        document.getElementById('errorMsg').innerText="Wrong Password!";
        document.getElementById('defaultForm-email').value ="";
        document.getElementById('defaultForm-pass').value="";
        break;
      }
    } else {
      alert('Member not found! Please create an account.')
    }
  }
};
//TESTING MODE
  // emailAddEntered='jasonttt@gmail.com'
  // checkLogin(emailAddEntered);
document.getElementById('btn-ModalLogin').addEventListener('click', checkLogin);


