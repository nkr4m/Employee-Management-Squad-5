import { Training } from "../Traning";

export interface Employee {
   empId:number;
	 firstName:String;
	 lastName:String;
	 age:number;
	 location:String;
	 emailId:String;
   
   training:Training[];
}
