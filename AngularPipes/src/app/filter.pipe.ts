import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";

@Pipe({
    name:'filterGenderWise',
    pure:false
})

export class FilterPipe implements PipeTransform {

    
    transform(student:Student[],filterText:string) {
        console.log("filter pipe is called");
        if(student.length === 0 || filterText ===''){
            return student;
        }else{
            return student.filter((student)=>{
                return student.gender.toLowerCase() === filterText.toLowerCase()
            })
        }
    }
}