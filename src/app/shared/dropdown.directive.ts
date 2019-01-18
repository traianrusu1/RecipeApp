import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
  @HostBinding("class.open") isOpen: boolean = false;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit() {}

  @HostListener("click") toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
    // if (this.isOpen) {
    //   this.renderer.addClass(this.elRef.nativeElement, "open");
    // } else {
    //   this.renderer.removeClass(this.elRef.nativeElement, "open");
    // }
  }
}
