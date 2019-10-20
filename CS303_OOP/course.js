/* eslint-disable*/


class Course{

    constructor(){
        this.courseInfo = [{ Id: "CS301", name: "Angular", code: "CS1" }, { Id: "CS303", name: "NodeJS", code: "CS2" },
{ Id: "CS403", name: "JavaSript", code: "CS3" }, { Id: "CS503", name: "Algorithm", code: "CS4" }]


    }

    mysort(sortby){
       let y=this.courseInfo.sort((a,b)=>a[sortby]>b[sortby]?1:-1);
    return y;
    }



}
