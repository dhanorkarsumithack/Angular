import { Directive,ElementRef,Renderer2,HostBinding, HostListener,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {
  
  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input()defaultColor:string='transparent';
  @Input('appBetterhighlight')highlightColor:string='pink';
  @Input()title:string='this is title';
  @HostBinding('style.backgroundColor')background:string=this.defaultColor;
  @HostBinding('style.border')border:string='none';

  @HostListener('mouseenter') mouseenter(){
    this.background=this.highlightColor;
    this.border='1px solid red'
  }
  
  ngOnInit(){
    this.background=this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(){
    this.background=this.defaultColor;
    this.border='none';
  }



}
