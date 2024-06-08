

app.controller('MainController', function($scope) {
    $scope.year = new Date();
});

app.controller('HomeController', function($scope) {
    $scope.business = {
        name: "Your Business Name",
        description: "Welcome to our business website. We offer a variety of services to meet your needs."
    };
});

app.controller('ArtificialIntelligenceController', function($scope) {
    $scope.business = {
        artificialInt: "We are a company dedicated to providing the best services in the industry. Our team is highly skilled and experienced."
    };
});
app.controller('DataController', function($scope) {
    $scope.business = {
        data: "We are a company dedicated to providing the best services in the industry. Our team is highly skilled and experienced."
    };
});
app.controller('AutomationController', function($scope) {
    $scope.business = {
        automated: "We are a company dedicated to providing the best services in the industry. Our team is highly skilled and experienced."
    };
});

app.controller('ContactController', function($scope) {
    $scope.business = {
        contact: {
            email: "contact@yourbusiness.com",
            phone: "(123) 456-7890"
        }
    };
});

