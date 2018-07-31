/* controllers */
var UMControllers = angular.module('UMControllers', []);

/* controller (home page) */ 
UMControllers.controller('HomeCtrl', function ($scope) {
	 document.getElementById("greeting").innerHTML = 'User Management';
     $scope.listUsers = function() { window.location.hash = '!/listUsers'; }
});

/* controller (list page) */ 
UMControllers.controller('UsersCtrl', function ($scope, $rootScope) {		

// role dropdown menu
$scope.roles = ['', 'admin', 'user'];

// users data
$scope.users =
[
  {
    "username": "jacki",
    "firstName": "Freddy",
    "lastName": "Mercury",
    "role": "admin",
    "enabled": 0
  },
  {
    "username": "dirol",
    "firstName": "John",
    "lastName": "France",
    "role": "user",
    "enabled": 1
  },
  {
    "username": "amne",
    "firstName": "July",
    "lastName": "May",
    "role": "admin",
    "enabled": 1
  },
  {
    "username": "veve",
    "firstName": "Jack",
    "lastName": "Dayly",
    "role": "user",
    "enabled": 0
  },
  {
    "username": "nunu",
    "firstName": "Maria",
    "lastName": "Didi",
    "role": "admin",
    "enabled": 1
  },
  {
    "username": "noul",
    "firstName": "Diana",
    "lastName": "Rose",
    "role": "user",
    "enabled": 0
  },
  {
    "username": "alfris",
    "firstName": "Freddy",
    "lastName": "Mercury",
    "role": "admin",
    "enabled": 0
  },
  {
    "username": "elouros",
    "firstName": "John",
    "lastName": "France",
    "role": "user",
    "enabled": 1
  },
  {
    "username": "dikina",
    "firstName": "Julia",
    "lastName": "May",
    "role": "admin",
    "enabled": 1
  },
  {
    "username": "didkina",
    "firstName": "Jack",
    "lastName": "Bitt",
    "role": "user",
    "enabled": 0
  },
  {
    "username": "few",
    "firstName": "Maria",
    "lastName": "Didi",
    "role": "admin",
    "enabled": 1
  },
  {
    "username": "greed",
    "firstName": "Diana",
    "lastName": "Rose",
    "role": "user",
    "enabled": 0
  },
  {
    "username": "vcee3",
    "firstName": "Sindy",
    "lastName": "Mercury",
    "role": "admin",
    "enabled": 0
  },
  {
    "username": "cdom9",
    "firstName": "John",
    "lastName": "France",
    "role": "user",
    "enabled": 1
  },
  {
    "username": "tuow",
    "firstName": "Julia",
    "lastName": "July",
    "role": "admin",
    "enabled": 1
  },
  {
    "username": "iott3",
    "firstName": "Jack",
    "lastName": "Dayly",
    "role": "user",
    "enabled": 0
  },
  {
    "username": "xeroow",
    "firstName": "Maria",
    "lastName": "Didi",
    "role": "admin",
    "enabled": 1
  },
  {
    "username": "huolu",
    "firstName": "Diana",
    "lastName": "Pinky",
    "role": "user",
    "enabled": 0
  },
  {
    "username": "userpalet",
    "firstName": "Freddy",
    "lastName": "Mpanti",
    "role": "admin",
    "enabled": 0
  },
  {
    "username": "juyt",
    "firstName": "John",
    "lastName": "France",
    "role": "user",
    "enabled": 1
  },
  {
    "username": "sinthlipsi",
    "firstName": "Julia",
    "lastName": "May",
    "role": "admin",
    "enabled": 1
  },
  {
    "username": "gravs",
    "firstName": "Jack",
    "lastName": "Nightly",
    "role": "user",
    "enabled": 0
  },
  {
    "username": "2qeqr3",
    "firstName": "Maria",
    "lastName": "Didi",
    "role": "admin",
    "enabled": 1
  },
  {
    "username": "ytt",
    "firstName": "Diana",
    "lastName": "Rose",
    "role": "user",
    "enabled": 0
  }   
];

// pagination 
$scope.viewby = 10;
$scope.totalItems = $scope.users.length;
$scope.currentPage = 1;
$scope.itemsPerPage = $scope.viewby;
$scope.maxSize = 5; 

$scope.setPage = function (pageNo) {
  $scope.currentPage = pageNo;
}

$scope.pageChanged = function() {
  console.log('Page changed to: ' + $scope.currentPage);
}

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; //reset to first page
}

// temporary json for new user 
$scope.newUser = {
 "username": "",
 "firstName": "",
 "lastName": "",
 "role": "",
 "enabled": 0
};

// switching this boolean shows/hide new user form
$scope.showNewUser = false;

$scope.expandNewUser = function() {
    $scope.showNewUser = true;
};

$scope.CancelAddUser = function() {
     $scope.newUser.username = "";
     $scope.newUser.firstName = "";
     $scope.newUser.lastName = "";
     $scope.newUser.role = "";
     $scope.newUser.enabled = 0;
     $scope.showNewUser = false;
}

// adds new user to $scope.users 
$scope.AddUser = function() {
    var index = $scope.users.length;
    $scope.temporaryNewUser = {
         "username": $scope.newUser.username,
         "firstName": $scope.newUser.firstName,
         "lastName": $scope.newUser.lastName,
         "role": $scope.newUser.role,
         "enabled": $scope.newUser.enabled
    };

    var doubleUsernameDetected = false;

    // username validation (check if username already exists or if username field is empty)
    if ($scope.temporaryNewUser.username == "")
    {
      alert("Please fill in the username field!");
    }
    else
    {
      for(i=0; i<index; i++) 
      {
        if ($scope.users[i].username == $scope.temporaryNewUser.username)
        {
            console.log("username already exists!");
            alert('Username already exists! Please change with a new one!');
            $scope.newUser.username = "";
            doubleUsernameDetected = true;
            break;
        }
      }
      if (!doubleUsernameDetected)
      {
        $scope.users.splice(index, 0, $scope.temporaryNewUser);
        $scope.CancelAddUser();
      }      
    }
}

$scope.deleteUser = function(index) {
    // console.log(index);
    var previousPagesTotal = ($scope.currentPage-1) * $scope.viewby;
    var indexToBeDeleted = previousPagesTotal + index;
    $scope.users.splice(indexToBeDeleted, 1);
}

// filtering changes $index in the records shown per page, thus we need a new way to detect the record to be deleted
$scope.deleteFilteredUser = function(user) {
    console.log(user);
    angular.forEach($scope.users, function(value, key) {
                if (value.username === user.username) {
                    console.log("I Found something...");
                    console.log("Value: " + value.username + value.firstName + value.lastName);
                    console.log("Key: " + key);
                    $scope.users.splice(key, 1);
                }
            })
}

$scope.editUser = function(index) {
    var selector = '#editUserTable' + index;
    $(selector).removeClass("hideClass");
}

$scope.editOkay = function(index) {
    var selector = '#editUserTable' + index;
    $(selector).addClass("hideClass");
}

$scope.editCancel = function(index) {
    var selector = '#editUserTable' + index;
    $(selector).addClass("hideClass");
}

// resets filter
$scope.reset = function() { 
  $scope.search=''; 
};

});


