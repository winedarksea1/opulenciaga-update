$(document).ready(function(){

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var firstScene = new ScrollMagic.Scene({
        triggerElement: '#sabaiwine img',
        triggerHook: 0
    })
    .setClassToggle('#sabaiwine', 'from-right')
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
    }) // this requires a plugin
    .addTo(controller);

    var secondScene = new ScrollMagic.Scene({
        triggerElement: '#wineglass img',
        triggerHook: 0.5
    })
    .setClassToggle('#wineglass', 'from-left')
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
    }) // this requires a plugin
    .addTo(controller);


});
