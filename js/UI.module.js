let BtnClose = document.getElementById("BtnClose");
console.log(BtnClose);
let lightContainer = document.querySelector(".light-container");
let header = document.querySelector("header");

export class UI {
  constructor() {}

  //methods
  //display Gamess()
  displayGames(data) {
    let box = "";
    for (let i = 0; i < data.length; i++) {
      box += `
         <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                            <div class="inner h-100">
                                <div data-id="${
                                  data[i].id
                                }" class="card h-100 my-card text-white">
                                    <img class="card-img-top my-img" src="${
                                      data[i].thumbnail
                                    }" alt="${data[i].title}" />
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h3 class="h6">${data[
                                              i
                                            ].title.split(" ", 1)}</h3>
                                            <span class="btn btn-success text-white freebadge">Free</span>
                                        </div>
                                    </div>
                                    <p class="p-3">
                                        ${data[i].short_description.split(
                                          " ",
                                          8
                                        )}
                                    </p>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <span class="badge mabadge text-white my-span">${
                                          data[i].genre
                                        }</span>
                                        <span class="badge mabadge text-white my-span">${data[
                                          i
                                        ].platform.split(" ", 2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
            
        
        `;
    }

    document.getElementById("rowData").innerHTML = box;
  }

  //display details ()

  displayGamesDetails(data) {
    let box = "";
    box = `
     <div class="col-md-4">
        <div class="inner">
            <h2 class="text-capitalize mb-3">game details</h2>
            <div class="image">
                <img src="${data.thumbnail}" class="rounded-3 w-100 my-2" alt="${data.title}">
            </div>
        </div>
    </div>
    <div class="col-md-8">
        <div class="inner">
            <h2>Title: ${data.title}</h2>
            <div > <span>Category:</span> <span class="badge bg-info">${data.genre}</span> </div>
            <div class="my-3"> <span>Platform:</span> <span class="badge bg-info">${data.platform}</span></div>
            <div class="my-3"> <span>Status:</span> <span class="badge bg-info">${data.publisher}</span></div>
            <p>${data.short_description}</p>
            <a href="${data.game_url}" class="btn btn-outline-warning text-white p-3">Show Game</a>
        </div>
    </div>
`;

    document.getElementById("details").innerHTML = box;
  }
}

