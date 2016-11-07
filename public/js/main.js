$(document).ready(function(){

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var fromRightfirst = new ScrollMagic.Scene({
        triggerElement: '#sabaiwine img',
        triggerHook: .3
    })
    .setClassToggle('#sabaiwine', 'from-right')
    .addIndicators({
        name: 'from right sabai',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
    }) // this requires a plugin
    .addTo(controller);

// ________________________________________________

    var fromLeft = new ScrollMagic.Scene({
        triggerElement: '#wineglass',
        triggerHook: 0.8
    })
    .setClassToggle('#wineglass', 'from-left')
    .addIndicators({
        name: 'from left blue',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
    }) // this requires a plugin
    .addTo(controller);

// ________________________________________________


    var fromRightsecond = new ScrollMagic.Scene({
        triggerElement: '#handcuffwine div',
        triggerHook: .8
    })
    .setClassToggle('#handcuffwine', 'from-right')
    .addIndicators({
        name: 'from right sabai',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
    }) // this requires a plugin
    .addTo(controller);




});
