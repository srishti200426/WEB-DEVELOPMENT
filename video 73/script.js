function createcard(title, cname, views, monthsold, duration, thumbnail) {
    let viewstr
    if (views < 100000) {
        viewstr = views / 1000 + "K";
    }

    else if (views > 1000000) {
        viewstr = views / 1000000 + "M";
    }
    else {
        viewstr = views / 1000 + "K";
    }
    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class = "capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewstr} views . ${monthsold} months ago</p>
            </div>
        </div>
    </div>`

    document.querySelector(".container").innerHTML = html
}

createcard("introduction to backend | Sigma Web Dev video #2","code with harry",560000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

