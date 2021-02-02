import { Component, EventEmitter, Output } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'})

export class HeaderComponent {
  @Output featureSelected = new EventEmitter<string>();

  collapsed = true;
  onSelect(feature: string) {
    console.log(feature),
  this.featureSelected.emit(feature)}

}
