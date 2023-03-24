import {EventEmitter} from '@angular/core'
export class UserService{
    user=[
        {name:'babu',job:'Teacher',gender:'male', country:'United states',age:35,avatar:'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=740&t=st=1675167201~exp=1675167801~hmac=dedc8c60089aabcb45161de0f240e52ae9aa21c159b93420d03cdf4ca14ba519'},
        {name:'sonya',job:'Designer',gender:'male', country:'Germany',age:35,avatar:'https://img.freepik.com/free-photo/smiling-man-white-shirt-typing-text-message-scrolling-feed-social-network-using-smartphone-gray_171337-634.jpg?w=740&t=st=1675167218~exp=1675167818~hmac=8577178ee891dde3756f96f222cfae2a05151f0b8593e8dd7f425cfa06623528'},
        {name:'sonu',job:'Lawyer',gender:'female', country:'Ireland',age:35,avatar:'https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?w=740&t=st=1675167239~exp=1675167839~hmac=dce3393c2fd24338eaad4e9c1b4a9096eda7151dd9932226199525579515fd4e'},
        {name:'nigam',job:'Doctor',gender:'male', country:'India',age:35,avatar:'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=740'},
    ]

    onShowDetailsClicked=new EventEmitter<{name:string,job:string,gender:string, country:string,age:number,avatar:string}>();

    showUserDetails(user:{name:string,job:string,gender:string, country:string,age:number,avatar:string}){
        this.onShowDetailsClicked.emit(user);
    }



}