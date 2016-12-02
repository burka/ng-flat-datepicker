(function(){
    'use strict';

    /**
     * @desc Dates calculator factory
     */

     angular
         .module('ngFlatDatepicker')
         .factory('datesCalculator', datesCalculator);

    function datesCalculator () {

        /**
         * List all years for the select
         * @return {[type]} [description]
         */
        function getYearsList(config) {
            var minYear = 2005;
            var maxYear = moment().year() + 1;
            if(config.minDate)
                minYear = moment.utc(config.minDate).year();
            if(config.maxDate)
                maxYear = moment.utc(config.maxDate).year();
            if(config.maxYear)
                maxYear = config.maxYear;
            if(config.minYear)
                minYear = config.minYear;
                
            if(minYear > maxYear)
                console.log('Min date must be smaller than max date!', config.minDate, config.maxDate );
                
            var yearsList = [];
            for (var i = maxYear; i >= minYear; i--) {
                yearsList.push(i);
            }
            return yearsList;
        }

        /**
         * List all days name in the current locale
         * @return {[type]} [description]
         */
        function getDaysNames () {
            var daysNameList = [];
            for (var i = 0; i < 7 ; i++) {
                daysNameList.push(moment().weekday(i).format('ddd'));
            }
            return daysNameList;
        }

        return {
            getYearsList: getYearsList,
            getDaysNames: getDaysNames
        };
    }

})();
