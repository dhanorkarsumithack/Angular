import { Directive, ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  
  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }

  @HostListener('mouseenter')onmousehover(){
    this.renderer.setStyle(this.element.nativeElement,'margin','30px 30px');
    this.renderer.setStyle(this.element.nativeElement,'padding','10px 10px');
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
  }
  @HostListener('mouseleave')onmouseout(){
    this.renderer.setStyle(this.element.nativeElement,'margin','10px 10px');
    this.renderer.setStyle(this.element.nativeElement,'padding','30px 30px');
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
  }

}
