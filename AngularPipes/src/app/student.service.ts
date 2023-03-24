import { Student } from "./student";

export class StudentService{
    students:Student[]=[
        {
            name:'ram jaju',
            course:'MBA',
            marks:839,
            DOB:new Date('11-12-1990'),
            gender:'male'
        },
        {
            name:'shubam bhade',
            course:'B-tech',
            marks:737,
            DOB:new Date('11-12-1990'),
            gender:'male'
        },
        {
            name:'amrita dhanorkar',
            course:'MBA',
            marks:957,
            DOB:new Date('11-08-1690'),
            gender:'female'
        },
        {
            name:'shreya ghoshal',
            course:'B-Tech',
            marks:733,
            DOB:new Date('01-10-1890'),
            gender:'female'
        },
        {
            name:'santosh dhanorkar',
            course:'M.Sc',
            marks:833,
            DOB:new Date('11-02-1990'),
            gender:'male'
        },
        {
            name:'kalpesh dhanorkar',
            course:'M.Sc',
            marks:989,
            DOB:new Date('01-03-1980'),
            gender:'male'
        }
    ]

    totalMarks:number=1000;

}