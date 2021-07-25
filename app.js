'use strict';

// creating object to save members details
const authMembers ={
  auth00001:{ 
    memberName: 'Vindce Aw Tong Howe',
    emailAdd: 'v',
    password: 'v',
    freeGame: 1,
    earnedDrawChances: 10,
    gender: 'male',
    cardStatus: 'Platinum Member',
    statusPts: 1500
  },

  auth00002:{
    memberName: 'Jason Tan Tik Tok',
    emailAdd: 'jasonttt@gmail.com',
    password: 'jttt123',
    freeGame: 1,
    earnedDrawChances: 1,
    gender: 'male',
    cardStatus: 'Premier Member',
    statusPts: 150
  }
};

// array of prizes
const prizes = {
  firstPrize :{
    prizeID: [1],
    prizeInfo: "$50,000 Cash",
    qty: 1,
    icon: "/images/prize50000.png"
  },

  secondPrize :{
    prizeID: [2,3,4],
    prizeInfo: "$5,000 Cash",
    qty: 3,
    icon: "/images/prize5000.png"
  },
  thirdPrize :{
    prizeID: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    prizeInfo: "$1,000 Cash",
    qty: 16,
    icon: "/images/prize1000.png"
  },
  forthprize :{
    prizeID: [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
    prizeInfo: "$100 Cash",
    qty: 20,
    icon: "/images/prize100.png"
  },
}



// API to show weather before booking pool***************************************************
const getCurrent = async ()=> {
  const myKey ="194a5aff8380bcec0960801dc24dce77";
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${myKey}`);

  const data = await response.json();
  console.log(data)
  document.getElementById('poolMsg').innerText = `${Math.round(data.main.temp-273.15)} degree Celsius | ${data.weather[0].description}`;
};


//function to check login details and display member page



const checkLogin = () => {
  const emailAddEntered = document.getElementById('defaultForm-email').value;
  const passwordEntered = document.getElementById('defaultForm-pass').value;

  for (const member in authMembers){
    if (emailAddEntered === authMembers[member].emailAdd){
      if(passwordEntered === authMembers[member].password){
        $('#modalLoginForm').modal('hide');
        $('#modalProfile').modal('show');
        // show member status
        document.getElementById('memberName').innerText = authMembers[member].memberName;
        document.getElementById('memberStatus').innerText = authMembers[member].cardStatus;

        // show weather for pool
        getCurrent();
        
        // show draw chances
        document.getElementById('drawMsg').innerText=`${authMembers[member].earnedDrawChances} draw chances Activate Now!`;
      
        //show game play

        document.getElementById('gameMsg').innerText=`${authMembers[member].freeGame} Game Play(s)`;

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


//login button onclick
document.getElementById('btn-ModalLogin').addEventListener('click', checkLogin);

//draw button onclick
document.getElementById('draw-btn').addEventListener('click',()=> {
  //document.getElementById('msgDisplay').innerText="You have activated all your drawing entries."
  document.getElementById('drawMsg').style.fontWeight='bold';
  document.getElementById('drawMsg').style.color = 'red';
  document.getElementById('drawMsg').innerText=`Draw entries ACTIVATED`;
  document.getElementById('draw-btn').disabled = 'true';
  
});

//game button onclick
  //function to create game table
  const createTable = () => {
    const gameTbl = document.getElementById("gameTable");
    const tbl = document.createElement('TABLE');
    for (let i = 0; i<4; i++){
      const tr=tbl.insertRow();

      for(let j=0; j<10; j++){
        const td= tr.insertCell();
        const gamePlayBtn= document.createElement('button');
        gamePlayBtn.setAttribute("class","gamePlayButton");
        gamePlayBtn.setAttribute("id", `gamePlayBtn_${i}${j}`)
        const gameBtnImage= document.createElement('img');
        gameBtnImage.setAttribute("id", `gamePlayImg_${i}${j}`)
        gameBtnImage.src = '/images/Merlionicon.png';
        gameBtnImage.style.height='90px';
        gamePlayBtn.appendChild(gameBtnImage);
        td.appendChild(gamePlayBtn);
        tr.appendChild(td);
        gamePlayBtn.addEventListener('click', () =>{
          
          // prizeWon();
          const randomID = Math.floor((Math.random()*40)+1);
          for (const prizeType in prizes) {
            if(prizes[prizeType].prizeID.includes(randomID)){
              // prizeWonIcon = prizes[prizeType].prizeInfo;
              prizeWonIcon = prizes[prizeType].icon;
              // console.log(prizes[prizeType].prizeInfo);
              // console.log(randomID)
              // console.log(prizeWonIcon);
            }
          }
          document.getElementById('gameMsg').innerText="Earn More Points to get more plays";
          document.getElementById('game-btn').disabled='true';
          //document.getElementById(`gamePlayBtn_${i}${j}`).innerText=`You Won`;
          const chosen = document.getElementById(`gamePlayImg_${i}${j}`);
          chosen.src = prizeWonIcon;
        });
        
      }
    }
    gameTbl.appendChild(tbl);
    
        
    
  };

  //eventlistener
  document.getElementById('game-btn').addEventListener('click',() =>{
    document.getElementById('msgDisplay').innerText="Merlion Jackpot time"
    document.getElementById('msgDisplay').style.backgroundColor='green';
    createTable();
    
  }
  );
  let prizeWonIcon;

  const prizeWon = () => {
    const randomID = Math.floor((Math.random()*40)+1);
    for (const prizeType in prizes) {
      if(prizes[prizeType].prizeID.includes(randomID)){
        prizeWonIcon = prizes[prizeType].prizeInfo
        // console.log(prizes[prizeType].prizeInfo);
        // console.log(randomID)
        console.log(prizeWonIcon);
      }
    }
  };
  console.log(prizeWonIcon);
  // document.getElementByclassName('gamePlayButton').addEventListener('click',() => {
  //   prizeWon();
//   // });
//   const gamePlayButtonSelected = document.getElementsByClassName('gamePlayButton');
// console.log(gamePlayButtonSelected.length);
//   for(let i = 0; i< gamePlayButtonSelected.length; i++){

//     gamePlayButtonSelected[i].addEventListener('click',()=>{
//       prizeWon();
//     })
//   }
