const urlSearch = "http://api.tvmaze.com/search/shows?q=";
const input = $('input');
const cardHolder = $('.cardHolder');
pNoResults = $('.noResult')


const search = (function (inputValue) {
    $.ajax({
        url: `${urlSearch}${inputValue}`,
        method: "GET",
    }).done(function (response) {
        cardHolder.html('');
        if (response.length === 0) {
            pNoResults.text("No results match");
        }
        response.forEach(function (item) {
            let card = $(`<div class="card" style="width: 18rem;" onclick='gotToShow(${item.show.id})'>
            <img src='${item.show.image.medium}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.show.name}</h5>
            </div>
          </div>`);
            cardHolder.append(card);
        })
    }).fail(function () {
        alert('Network error!')
    })
});

const eventHandler = function (event) {
    if (event.keyCode == 13) {
        let inputValue = input.val();
        input.blur();
        if (!inputValue) {
            alert('Input is requred');
        }
        search(inputValue)
    }
}


const gotToShow = function (id) {
    localStorage.setItem('id', id);
    location.assign('showInfo.html');
}

input.on('keydown', eventHandler);

input.keyup(function () {
    const enteredText = input.val()

    $.ajax({
        url: `${urlSearch}${enteredText}`,
        method: 'GET',
    }).done(function (gotResult) {
        // console.log(gotResult)
        $('#searchList').text('');
        for (let i = 0; i < 10; i++) {
            if (gotResult[i] !== undefined) {
                let searchListItem = $(`<li onclick='gotToShow(${gotResult[i].show.id})'>${gotResult[i].show.name}</li>`);
                $("#searchList").append(searchListItem);
            }
            else {
                if ($("#searchList").children().length === 0) {
                    let searchListItem = $(`<li>No result</li>`);
                    $("#searchList").append(searchListItem);
                    break;
                }
            }
        }
    })
})