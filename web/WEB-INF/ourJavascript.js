/* global tableBody */
window.onload = function() {

    var students = [{
        "name": "Jens",
        "email": "coilx14396@hotmail.com",
        "phone": "12345678",
        "Category": "red"
    }, {
        "name": "Thomas",
        "email": "x14396@hotmail.com",
        "phone": "12345678",
        "Category": "yellow"
    }, {
        "name": "Kim",
        "email": "coi96@hotmail.com",
        "phone": "12345678",
        "Category": "green"
    }, {
        "name": "Jonas",
        "email": "scheldejonas@gmail.com",
        "phone": "20772194",
        "Category": "Yellow"
    }];

    //    for (var i = 0; i < students.length; i++) {
    //        console.log(students[i]);
    //    }

    var tb = document.getElementById("studentTable");
       console.log(tb);
    
    
    var deleteEverything = function () {
    tableBody.innerHTML = "";
    students.length = 0;
    };

    var populateTable = function() {
        tb.innerHTML = "";
        for (var i = 0; i < students.length; i++) {
            var row = tb.insertRow(i);
            row.insertCell(0).innerHTML = students[i].name;
            row.insertCell(1).innerHTML = students[i].email;
            row.insertCell(2).innerHTML = students[i].phone;
            row.insertCell(3).innerHTML = students[i].Category;
        }
    };

    populateTable();
    
//    console.log(students);

    var studentform = document.getElementById("studentform");
    //console.log(studentform);
    studentform.onsubmit = function(event) {
        event.preventDefault();
        var student = {};
        student.name = studentform.elements["full_name"].value;
        student.email = studentform.elements["email"].value;
        student.phone = studentform.elements["phone"].value;
        student.category = studentform.elements["category"].value;
        students.push(student);
        populateTable();
        var fullNameField = document.getElementById("full_name");
        
    };

    // remove student
//    var lastId = [];
//    var removeStudent = function (id) {
//    var del = id.substring(0,1);    
//    students.splice(del, 1);
//    populateTable();
//    };


};

