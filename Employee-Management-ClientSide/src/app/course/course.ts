export class Course {
    courseId: number; 
    courseName:string;
    coursestartdate: string ; 
    courseenddate: string ; 

    constructor(courseId: number, coursename: string, coursestartdate : string,  courseenddate : string) {
      this.courseId = courseId;
      this.courseName = coursename;
      this.coursestartdate=coursestartdate;
      this.courseenddate=courseenddate;
    }
  }
