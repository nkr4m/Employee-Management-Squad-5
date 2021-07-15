export class Course {
    courseId: number; 
    courseName:string;
    courseStartDate: string ; 
    courseEndDate: string ; 

    constructor(courseID: number, coursename: string, coursestartdate : string,  courseenddate : string) {
      this.courseId = courseID;
      this.courseName = coursename;
      this.courseStartDate=coursestartdate;
      this.courseEndDate=courseenddate;
    }
  }
