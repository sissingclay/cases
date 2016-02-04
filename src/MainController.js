/**
 * Created by claysissing on 03/02/2016.
 */
'use strict';

class MainController {

    constructor($http) {

        this.text   = 'It warming here :-)';
        this.$http  = $http;
        this.getData();

    }

    itsGoingToChange(test) {
        console.log('data', test);
    }

    getData() {

        this.$http.get('http://jsonplaceholder.typicode.com/users').then(response => {

            this.context = response.data;

        }, function(error) {

            console.log('error', error);

        });
    }
}

MainController.$inject = ['$http'];

export default MainController;