import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveExapmle';
  videos=[
    {title:'my video 1',share:415,likes:257,dislikes:12,thumbnail:'https://img.freepik.com/free-photo/footpath-beautiful-arch-flowers-plants_181624-16890.jpg?w=740&t=st=1675066971~exp=1675067571~hmac=e7d6e92614b332d0181da6f512b89ba6a5f99d9cb79404e15eef617d85811fbb'},
    {title:'my video 2',share:215,likes:325,dislikes:12,thumbnail:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=740&t=st=1675067020~exp=1675067620~hmac=97b920ee518cf05d6c19300423a669da69af5cabfa16b0cbe4b56fb0fb820a65'},
    {title:'my video 3',share:513,likes:105,dislikes:12,thumbnail:'https://img.freepik.com/premium-photo/beautiful-architecture-ancient-ruins-temple-hampi-sunset-karnataka-india_211251-1232.jpg?w=740'}
  ]

  mostlikedvideo=this.getmostlikedvideo();

  getmostlikedvideo(){
    let videoCopy=[...this.videos];
    return videoCopy.sort((curr,next)=>next.likes-curr.likes)[0];
  }
}
