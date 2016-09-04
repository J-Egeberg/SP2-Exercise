window.onload = function() {

    var students = [
        {
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
            "Category": "blue"
        }
    ];
    
//    for (var i = 0; i < students.length; i++) {
//        console.log(students[i]);
//    }

    var tb = document.getElementById("test");
//    console.log(tb);

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
    
    var studentform = document.getElementById("studentform");
    //console.log(studentform);
    studentform.onsubmit = function(event) {
        event.preventdefault();
        //console.log(studentForm.elements["full_name"].value);
        var student = {};
        student.name = studentform.elements["full_name"].value;
        student.email = studentform.elements["email"].value;
        student.phone = studentform.elements["phone"].value;
        student.category = studentform.elements["Category"].value;
        //students.push(student);
        students.push([student.name], [student.email], [student.phone], [student.category]);
        populateTable();
    };

    // remove student
    function deleteStudent() {
        document.getElementById("myTable").deleteRow(0);
    }

// remove student
function deleteStudent() {
    document.getElementById("myTable").deleteRow(0);
}

//remove all student
function deleteAllStudents() {
    for (var i = 0; i < students.length; i++) {
        document.getElementById("myTable").deleteRow(i);
    }
};


};
