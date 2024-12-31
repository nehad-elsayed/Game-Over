import { UI } from "./UI.module.js";
let loading = document.querySelector('.loading');
let BtnClose= document.getElementById("BtnClose")
let lightContainer= document.querySelector('.light-container')
let header= document.querySelector('header')
console.log(BtnClose)
console.log(lightContainer,header)




export class Details{

constructor(id){

    this.ui= new UI ()



    BtnClose.addEventListener("click" , () => {
header.classList.remove("d-none")
lightContainer.classList.add("d-none")

console.log("hello")
})



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
