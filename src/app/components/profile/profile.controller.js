(function() {
    'use strict';

    angular
        .module('xyz-cv-ui.profile')
        .controller('ProfileController', ProfileController);

        function ProfileController() {
            var vm = this;

            vm.hello = [6, 7, 8, 9, 10];

            //////////////

            function refresh() {
                /* */
            }
        }
})();
