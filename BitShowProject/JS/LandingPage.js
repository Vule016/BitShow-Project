const urlShow = "https://api.tvmaze.com/shows?page=1";

$(document).ready(function () {
    shows();
})

const shows = (function () {
    $.ajax({
        url: urlShow,
        method: "GET",
    }).done(function (response) {
        // console.log(response)
        for (let i = 0; i < 50; i++) {
            let item = response[i];
            let card = $(`<div class="card" style="width: 18rem;" onclick='gotToShow(${item.id})'>
            <img src='${item.image.medium}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
            </div>
          </div>`);
            cardHolder.append(card)
        }
    }).fail(function () {
        alert('Network error!')
    })

})





