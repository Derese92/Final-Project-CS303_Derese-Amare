/* eslint-disable*/
//"use strict";
/* global studObj */

studInfo = "";

class User {

    /**
     * @param{}
     * @returns{}
     */
    constructor() {

        this.courseInfo = [{ Id: "CS301", name: "Angular", code: "CS1" }, { Id: "CS303", name: "NodeJS", code: "CS2" },
        { Id: "CS403", name: "JavaSript", code: "CS3" }, { Id: "CS503", name: "Algorithm", code: "CS4" }]

        this.userInfo = [
            { fname: "Tesfaye", lname: "Abie", phone: 123 - 456 - 777, role: "student", password: "1234", id: "1" },
            { fname: "Derese", lname: "Teshome", phone: 123 - 456 - 777, role: "admin", password: "1234", id: "2" },
            { fname: "Semere", lname: "Kidan", phone: 123 - 456 - 667, role: "faculty", password: "1234", id: "3" },
            { fname: "Bikale", lname: "Abera", phone: 123 - 456 - 997, role: "student", password: "1234", id: "4" },
            { fname: "Fre", lname: "Michael", phone: 123 - 456 - 337, role: "student", password: "1234", id: "5" },
            { fname: "Daniel", lname: "Nigussie", phone: 123 - 456 - 337, role: "faculty", password: "1234", id: "6" },
            { fname: "Paulos", lname: "Gude", phone: 123 - 456 - 897, role: "faculty", password: "1234", id: "7" },
            { fname: "Tariku", lname: "Gelan", phone: 123 - 964 - 567, role: "student", password: "1234", id: "8" },
            { fname: "Tariku", lname: "Gelan", phone: 123 - 964 - 567, role: "student", password: "1234", id: "8" },
            { fname: "Tariku", lname: "Gelan", phone: 123 - 964 - 567, role: "student", password: "1234", id: "8" }
        ]


    }
    mysort(sortby) {
        let y = this.courseInfo.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1);
        return y;
    }
    /**
     * @param  {string} id id of the user
     * @param  {string} ps password of the user
     * @returns{}
     */
    checkuser(id, ps) {
        localStorage.setItem('CourseInfo', JSON.stringify(this.courseInfo));
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));

        for (let key of this.userInfo) {
            if (ps == key.password && key.id == id) {
                if (key.role == "student") window.open('student.html?id=' + key.id, '_blank');
                else if (key.role == "admin") window.open('Admin.html?id=' + key.id, '_blank');
                else window.open('faculty.html?id=' + key.id, '_blank');
            }
        }
    }
    /**
     * @param  {string} userRole user role weather it is admin, student or faculty
     * @param  {string} sortby method to sort the given array of faculty
     */
    showFaculty(userRole, sortby) {
        var userData = JSON.parse(localStorage.getItem('userInfo'));
        console.log(userData)

        localStorage.setItem('userInfo', JSON.stringify(userData.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1)));
        // console.log(this.userInfo)
        studInfo = `<table id="empTable"> <tr><th onclick="studObj.showFaculty('${userRole}','fname')">
        Firstname</th><th onclick="studObj.showFaculty('${userRole}','lname')">Lastname
            </th><th onclick="studObj.showFaculty('${userRole}','phone')">Phone</th>
            <th onclick="studObj.showFaculty('${userRole}','role')">Role</th>
            <th onclick="studObj.showFaculty('${userRole}','password')">Password</th>
            <th onclick="studObj.showFaculty('${userRole}','id')">Id</th>
            <th onclick="studObj.showFaculty('${userRole}','id')">Department</th>
         
            </tr> `;


        for (let key of userData) {
            if (key.role == userRole) {
                // let stuinfo=mystudent.userInfo.find((item)=>item.id==studentId)
                studInfo += "<tr><td contenteditable='true'>" + key.fname + "</td><td contenteditable='true'>" + key.lname + "</td><td contenteditable='true'>" + key.phone + "</td><td contenteditable='true'>" + key.role + "</td><td contenteditable='true'>" + key.password + "</td><td contenteditable='true'>" + key.id + "</td><td contenteditable='true'>" + facultyObj.department + "</td></tr>";
            }
        }

        document.getElementById("showInfo").innerHTML = studInfo + "</table>";
    }
    /**
     * @param  {string} userRole user role 
     * @param  {string} sortby method for sorting 
     */
    showStudent(userRole, sortby) {
        var userData = JSON.parse(localStorage.getItem('userInfo'));
        var studentInformation = JSON.parse(localStorage.getItem('studentInfo'));
        console.log(userData)

        localStorage.setItem('userInfo', JSON.stringify(userData.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1)));
        // console.log(this.userInfo)
        studInfo = `<table id="empTable"> <tr><th onclick="studObj.showStudent('${userRole}','fname')">
        Firstname</th><th onclick="studObj.showStudent('${userRole}','lname')">Lastname
            </th><th onclick="studObj.showStudent('${userRole}','phone')">Phone</th>
            <th onclick="studObj.showStudent('${userRole}','role')">Role</th>
            <th onclick="studObj.showStudent('${userRole}','password')">Password</th>
            <th onclick="studObj.showStudent('${userRole}','id')">Id</th>
            <th onclick="studObj.showStudent('${userRole}','id')">Entry Year</th>
            <th onclick="studObj.showStudent('${userRole}','id')">Gpa</th>
            <th onclick="studObj.showStudent('${userRole}','id')">Course</th>
         
            </tr> `;

        for (let key of userData) {
            if (key.role == userRole) {
                // let stuinfo=mystudent.userInfo.find((item)=>item.id==studentId)
                studInfo += "<tr><td contenteditable='true'>" + key.fname + "</td><td contenteditable='true'>" + key.lname + "</td><td contenteditable='true'>" + key.phone + "</td><td contenteditable='true'>" + key.role + "</td><td contenteditable='true'>" + key.password + "</td><td contenteditable='true'>" + key.id + "</td>";
                for (let k of studentInformation) {
                    console.log(k)
                    if (key.id == k.id) {
                        studInfo += "<td contenteditable='true'>" + k.entryYear + "</td><td contenteditable='true'>" + k.gpa + "</td><td contenteditable='true'>";
                        // for(let keyCourses of k.course){
                        studInfo += keyCourses.join(",");

                        // } 
                        studInfo += "</td></tr>";
                    }
                }
            }
        }

        document.getElementById("showInfo").innerHTML = studInfo + "</table>";
    }
    /**
     * creating table for displaying all the required information
     */
    showTableData() {
        document.getElementById('showTable').innerHTML = "";
        var myTab = document.getElementById('empTable');
        let myobj = [];
        var userData = JSON.parse(localStorage.getItem('userInfo'));
        // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
        for (let i = 1; i < myTab.rows.length; i++) {
            let temp = [];

            // GET THE CELLS COLLECTION OF THE CURRENT ROW.
            var objCells = myTab.rows.item(i).cells;

            // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
            for (var j = 0; j < objCells.length; j++) {

                // temp = temp + objCells.item(j).innerHTML;
                temp[j] = objCells.item(j).innerHTML;
                // console.log(temp[j] )
            }

            myobj = { fname: temp[0], lname: temp[1], phone: temp[2], role: temp[3], password: temp[4], id: temp[5] };
            // console.log(myobj.fname)

            userData.splice(userData.findIndex((item) => item.id == myobj.id), 1, myobj);
            localStorage.setItem('userInfo', JSON.stringify(userData));
        }
        // localStorage.setItem('userInfo', JSON.stringify(myobj));
    }

};
class Student extends User {
    /**
     * 
     */
    constructor() {
        super();
        this.studentInfo = [{ id: "1", entryYear: 2017, gpa: 4, course: ["Angular", "NodeJS"] },
        { id: "4", entryYear: 2019, gpa: 4, course: ["JavaSript", "NodeJS"] },
        { id: "5", entryYear: 2018, gpa: 4, course: ["Angular", "JavaSript", "Algorithm"] }]

        localStorage.setItem('studentInfo', JSON.stringify(this.studentInfo));
    }

};
class Faculty extends Student {
    /**
     * 
     */
    constructor() {
        super();
        this.department = ["Msd"];

    }
};

class Admin extends Faculty {
    constructor() {
        super();
    }

};
studObj = new User();
facultyObj = new Faculty();


