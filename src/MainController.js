class MainController {

    constructor($http) {
        this.text = 'It warming here :-)';
        this.$http = $http;
        this.getData();
    }

    itsGoingToChange(test) {
        this.tests = test;
    }

    getData() {
        this.$http.get('http://jsonplaceholder.typicode.com/users').then(response => {
            this.context = response.data;
        }, function (error) {
            this.error = error;
        });
    }
}

MainController.$inject = ['$http'];

export default MainController;
