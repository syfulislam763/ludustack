function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.addEventListener("DOMContentLoaded", function () {

    var simple = new PolygonAvatar({
        selector: '.polyavatar',
        image: 'https://res.cloudinary.com/ludustack/image/upload/f_auto,q_auto/v1/0c7e18b2-3682-444d-a62b-30e311e76891/profileimage_0c7e18b2-3682-444d-a62b-30e311e76891_Personal',
        percentage: Math.round(Math.random() * 100) / 100,
        online: true,
        side: 6,
        showProgress: true,
        animated: true,
        progressBarColor: "#4ff461",//'#4ff461', 73f573
        levelNumber: getRandomInt(100)
    });
});
