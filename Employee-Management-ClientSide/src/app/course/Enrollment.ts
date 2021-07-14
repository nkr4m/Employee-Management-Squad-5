export class Enrollment {
    coursecompleted: boolean;
   
   course_courseID: number ; 

   constructor(coursecompleted: boolean, course_courseID : number) {
     this.coursecompleted=coursecompleted;
     this.course_courseID=course_courseID;
   }
}