var mobileBool = true;
if (window.screen.width < 500) {
    mobileBool = false;
}

$(document).ready(function() {

    $(".contactlink").click(function() {
        $('#fp-nav').addClass('hide');
    })

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['start', 'aerial', 'android', 'webdev'],
        navigation: mobileBool,
        navigationPosition: 'right',
        navigationTooltips: ['START', 'AERIAL', 'ANDROID', 'WEBDEV', 'CONTACT'],
        showActiveTooltip: true,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['black', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 500,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 4 && direction =='down'){
                $('#fp-nav').addClass('hide');
            }

            else if(index == 5 && direction == 'up'){
                $('#fp-nav').removeClass('hide');
            }
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    var contactform =  document.getElementById('contact_form');
    contactform.setAttribute('action', '//formspree.io/' + 'linuskinzel' + '@' + 'gmail' + '.' + 'com');

    var $contactForm = $('#contact_form');
    $contactForm.submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/' + 'linuskinzel' + '@' + 'gmail' + '.' + 'com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            },
            success: function(data) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--success">Message sent!</div>');
            },
            error: function(err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
            }
        });
    });
});