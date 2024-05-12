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

// Ajoutez un écouteur d'événements à chaque bouton de fermeture
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Recherchez le parent de la classe "popup-modal" pour la modal actuelle
            var modal = this.closest('.popup-modal');
            // Vérifiez si la modal a été trouvée
            if (modal) {
                // Ajoutez la classe "hide-modal" à la modal pour la masquer
                modal.classList.add('hide-modal');
            }
        });
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