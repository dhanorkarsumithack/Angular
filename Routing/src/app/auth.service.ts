export class AuthService{
    loggedIn:boolean=false;
    login(){
    
        this.loggedIn=true;
        console.log("user logged in");
        
    }

    logout(){
        this.loggedIn=false;
        console.log("user logged out");

    }

    IsAuthenticated(){
        console.log("user is authenticated")
        return this.loggedIn;
       
    }
}