import { UI } from "./UI.module.js";
let loading = document.querySelector('.loading');
// let btnClose= document.querySelector('.icon-close')
let lightContainer= document.querySelector('.light-container')
let header= document.querySelector('header')
// console.log(btnClose)
// console.log(lightContainer,header)


document.querySelector('.icon-close').addEventListener("click" , () => {
  header.classList.remove("d-none")
  lightContainer.classList.add("d-none")
  
  console.log("hello")
  })
 

export class Details{

constructor(id){

    this.ui= new UI ()




// document.querySelector('.icon-close').addEventListener("click" , () => {
// header.classList.remove("d-none")
// lightContainer.classList.add("d-none")

// console.log("hello")
// })

// lightContainer.addEventListener('keyup',(e)=>{
//     if(e.key=="Esc"){
//         header.classList.remove("d-none")
//         lightContainer.classList.add("d-none")
//     }
// })

this.getGameDetails(id);
}

//to call API for game details
async getGameDetails(gameId){

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3827b36291msh3178fd4760d4b23p1cb019jsn8285e2e52193',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    

    try {
        loading.classList.remove("d-none");
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const finalResponse = await response.json();
        console.log(finalResponse);
        //تفاصيل اللعبه معايا هنا 
        this.ui.displayGamesDetails(finalResponse); // ببعت التفاصيل لدالة العرض
        
      } catch (error) {
        console.error(error);
      }
      finally{
        loading.classList.add("d-none");
      }

}


}


// let fristGame = new Details(235);
// console.log(fristGame)
