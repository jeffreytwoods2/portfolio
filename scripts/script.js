let leftArrow = $("#left-arrow");
let rightArrow = $("#right-arrow");
let arrows = $("#arrows");
let truckImg = $("#truck-pics");
let srcArray = [
    "images/truck-front.jpeg",
    "images/truck-side.jpeg",
    "images/engine.jpeg"
];

rightArrow.on('click', function () {

    if (parseInt($("#truck-pics").attr("data-toggle")) < srcArray.length - 1) {
        let newToggle = parseInt($("#truck-pics").attr("data-toggle")) + 1;
        truckImg.attr("data-toggle", newToggle);
        truckImg.attr("src", srcArray[newToggle]);
    } else if (parseInt($("#truck-pics").attr("data-toggle")) === srcArray.length - 1) {
        truckImg.attr("data-toggle", 0);
        truckImg.attr("src", srcArray[0]);
    };
});

leftArrow.on('click', function () {

    if (parseInt($("#truck-pics").attr("data-toggle")) > 0) {
        let newToggle = parseInt($("#truck-pics").attr("data-toggle")) - 1;
        truckImg.attr("data-toggle", newToggle);
        truckImg.attr("src", srcArray[newToggle]);
    } else if (parseInt($("#truck-pics").attr("data-toggle")) === 0) {
        let arrayLen = srcArray.length - 1;
        truckImg.attr("data-toggle", arrayLen);
        truckImg.attr("src", srcArray[arrayLen]);
    };
});