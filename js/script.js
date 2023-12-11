// Shery.imageEffect("#back", { style: 5, config: { "a": { "value": 1.6, "range": [0, 30] }, "b": { "value": -0.88, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.0535168195718656 }, "ignoreShapeAspect": { "value": false }, "shapePosition": { "value": { "x": -0.31182795698924726, "y": -0.22580645161290325 } }, "shapeScale": { "value": { "x": 1, "y": 1 } }, "shapeEdgeSoftness": { "value": 0.5, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 1, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 0.74, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.09, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 18.31 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.07, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.49, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 17.56, "range": [0, 100] }, "uColor": { "value": false }, "uSpeed": { "value": 1, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 3.09, "range": [0, 5] }, "uFrequency": { "value": 1.37, "range": [0, 10] } }, gooey: true });



var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var win = document.querySelector("#main");
    var index = 0;
    var animating = false;

    win.addEventListener("click", function () {
        if (!animating) {
            animating = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    animating = false;
                }
            });

            index === h1s.length - 1 ? (index = 0) : index++;

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});