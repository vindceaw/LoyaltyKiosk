'use strict';

// creating object to save members details
const authMembers ={
  auth00001:{ 
    memberName: 'Vindce Aw Tong Howe',
    emailAdd: 'v',
    password: 'v',
    earnedGame: 4,
    earnedDrawChances: 10,
    gender: 'male',
    cardStatus: 'Premier',
    statusPts: 1500
  },

  auth00002:{
    memberName: 'Jason Tan Tik Tok',
    emailAdd: 'jasonttt@gmail.com',
    password: 'jttt123',
    earnedGame: 2,
    earnedDrawChances: 1,
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
// Get weather

const getCountryWeatherAsync = async () => {
  try{
  const url = `https://goweather.herokuapp.com/weather/Singapore`
  const res = await fetch(url);
  const data = await res.json();
  return data;
  } catch(err) {
  console.error(err);
  } 
};
console.log(getCountryWeatherAsync());

//Profile Modal to display information



const checkLogin = () => {
  const emailAddEntered = document.getElementById('defaultForm-email').value;
  const passwordEntered = document.getElementById('defaultForm-pass').value;

  for (const member in authMembers){
    if (emailAddEntered === authMembers[member].emailAdd){
      if(passwordEntered === authMembers[member].password){
        $('#modalLoginForm').modal('hide');
        $('#modalProfile').modal('show');
        // show member status
        document.getElementById('memberStatus').innerText = `${authMembers[member].memberName} | ${authMembers[member].cardStatus}`;
        // show weather for pool
        getCountryWeatherAsync();
        // show draw chances
        document.getElementById('drawMsg').innerText=`${authMembers[member].earnedDrawChances} draw chances Activate Now!`;
      
        //show game play

        document.getElementById('gameMsg').innerText=`${authMembers[member].earnedGame + 1} Game Play(s)`;

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


