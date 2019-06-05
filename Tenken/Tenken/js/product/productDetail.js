
minus = function () {
    var input = document.getElementById("quantity");
    if (parseInt(input.value) > 1) {
        input.value -= 1;
    }
}
plus = function () {
    var input = document.getElementById("quantity");
    input.value = parseInt(input.value) + 1;
}

ratingStar = function (rating) {
    $("#rating").find("i").removeClass().addClass("icon-star-empty");
    for (let i = 1; i <= rating; i++) {
        $("#star-" + i).removeClass().addClass("icon-star-full");
    }
}

var ratingCount = 0;
var rating = function (data) {
    ratingStar(data);
    ratingCount = data;
}


comment = function (content, productid, userid) {

    var request = new XMLHttpRequest()
    request.open('POST', '/CommentAPI/commentMerge', true)
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onload = function () {
        var data = JSON.parse(this.response)
        // Begin accessing JSON data here
        if (request.status >= 200 && request.status < 400) {
            window.location.href = "/Product/ProductDetail?productID=" + productid;
        } else {
            alert("Some thing wrong, please try again!")
        }
    }
    var params = 'content=' + content + '&productID=' + productid + '&userID=' + userid + '&rating=' + ratingCount + '&reply=0';
    request.send(params)
}