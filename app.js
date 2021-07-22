'use strict';

// creating object to save members details
const authMembers ={
  auth00001:{ 
    memberName: 'Vindce Aw Tong Howe',
    emailAdd: 'v',
    password: 'v',
    freeGame: 1,
    earnedGame: 4,
    gender: 'male',
    cardStatus: 'Premier',
    statusPts: 1500
  },

  auth00002:{
    memberName: 'Jason Tan Tik Tok',
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

const getCountryWeatherAsync = async function (country) {
  try{
  const url = `https://goweather.herokuapp.com/weather/${country}`
  const res = await fetch(url);
  const data = await res.json();
  return data;
  } catch(err) {
  console.error(err);
  } 
};
console.log(getCountryWeatherAsync("Singapore"));
// getting weather info



const displayMsges = () =>{
  const editProfileMsg = getCountryWeatherAsync("Singapore");
  document.getElementById('editProfileMsg').innerText = editProfileMsg
}

const checkLogin = () => {
  const emailAddEntered = document.getElementById('defaultForm-email').value;
  const passwordEntered = document.getElementById('defaultForm-pass').value;

  for (const member in authMembers){
    if (emailAddEntered === authMembers[member].emailAdd){
      if(passwordEntered === authMembers[member].password){
        $('#modalLoginForm').modal('hide');
        $('#modalProfile').modal('show');
        // document.getElementById('profileStatus').innerText = `${authMembers[member].memberName} | ${authMembers[member].cardStatus}`;
        document.getElementById('memberStatus').innerText = `${authMembers[member].memberName} | ${authMembers[member].cardStatus}`;
        displayMsges();
        // window.location.assign("/profile.html"); 
        // const profileStatus = document.getElementById('profileStatus');
        // profileStatus.value= authMembers[member].memberName;
      } else {
        // alert('Wrong Password!');
        document.getElementById('errorMsg').innerText="Wrong Password!";
        document.getElementById('defaultForm-email').value ="";
        document.getElementById('defaultForm-pass').value="";
        break;
      }
    } else {
      document.getElementById('errorMsg').innerText="User not found!";
    }
  }
};


//TESTING MODE
  // emailAddEntered='jasonttt@gmail.com'
  // checkLogin(emailAddEntered);
document.getElementById('btn-ModalLogin').addEventListener('click', checkLogin);


