/* global tableBody */

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

var tb = document.getElementById("studentTable");

window.onload = function() {

    var populateTable = function() {
        tb.innerHTML = "";
        for (var i = 0; i < students.length; i++) {
            var row = tb.insertRow(i);
            row.insertCell(0).innerHTML = students[i].name;
            row.insertCell(1).innerHTML = students[i].email;
            row.insertCell(2).innerHTML = students[i].phone;
            row.insertCell(3).innerHTML = students[i].Category;
            row.insertCell(4).innerHTML = "<button onclick=\"deleteRow(" + i + ")\" id=" + i + "btn\" class=\"btn btn-danger\">Delete</button>";
        }
    };

    populateTable();

};

function deleteRow(rowNumber) {
    tb.deleteRow(rowNumber);
    populateTable();
}

function deleteEverything() {
    tb.innerHTML = "";
    students.length = 0;
};

var studentform = document.getElementById("studentform");

studentform.onsubmit = function(event) {
    event.preventDefault();
    var student = {};
    student.name = studentform.elements["full_name"].value;
    student.email = studentform.elements["email"].value;
    student.phone = studentform.elements["phone"].value;
    student.category = studentform.elements["category"].value;
    students.push(student);
    populateTable();
    studentform.elements["full_name"].value = "";
    studentform.elements["email"].value = "";
    studentform.elements["phone"].value = "";
    studentform.elements["category"].value = "| Choose category |";
};



