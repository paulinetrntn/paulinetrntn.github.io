$(document).ready(function () {
    "use strict";

    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    // $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    $("#demo01").animatedModal({
        modalTarget:'animatedModal1'
    });
    $("#demo02").animatedModal({
        modalTarget:'animatedModal2'
    });
    $("#demo03").animatedModal({
        modalTarget:'animatedModal3'
    });
    $("#demo04").animatedModal({
        modalTarget:'animatedModal4'
    });
    $("#demo05").animatedModal({
        modalTarget:'animatedModal5'
    });
    $("#demo06").animatedModal({
        modalTarget:'animatedModal6'
    });

    // Récupérez tous les boutons de fermeture des modales
    var closeButtons = document.querySelectorAll('.close-popup-modal');

// Pour fermer la première modal
    document.getElementById('btn-close-modal1').addEventListener('click', function() {
        document.getElementById('animatedModal1').classList.remove('modal-show');
        document.getElementById('animatedModal1').classList.add('modal-hide'); // Ajoute une classe de masquage sans animation
    });

// Pour fermer la deuxième modal
    document.getElementById('btn-close-modal2').addEventListener('click', function() {
        document.getElementById('animatedModal2').classList.remove('modal-show');
        document.getElementById('animatedModal2').classList.add('modal-hide'); // Ajoute une classe de masquage sans animation
    });

// Pour fermer la troisième modal
    document.getElementById('btn-close-modal3').addEventListener('click', function() {
        document.getElementById('animatedModal3').classList.remove('modal-show');
        document.getElementById('animatedModal3').classList.add('modal-hide'); // Ajoute une classe de masquage sans animation
    });

// Pour fermer la quatrième modal
    document.getElementById('btn-close-modal4').addEventListener('click', function() {
        document.getElementById('animatedModal4').classList.remove('modal-show');
        document.getElementById('animatedModal4').classList.add('modal-hide'); // Ajoute une classe de masquage sans animation
    });

// Pour fermer la cinquième modal
    document.getElementById('btn-close-modal5').addEventListener('click', function() {
        document.getElementById('animatedModal5').classList.remove('modal-show');
        document.getElementById('animatedModal5').classList.add('modal-hide'); // Ajoute une classe de masquage sans animation
    });

// Pour fermer la sixième modal
    document.getElementById('btn-close-modal6').addEventListener('click', function() {
        document.getElementById('animatedModal6').classList.remove('modal-show');
        document.getElementById('animatedModal6').classList.add('modal-hide'); // Ajoute une classe de masquage sans animation
    });




    const triggerTabList = document.querySelectorAll('#nav-tab button')
    triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', event => {
            event.preventDefault()
            tabTrigger.show()
        })
    })

});