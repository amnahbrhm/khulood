import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-paperwork',
  templateUrl: './paperwork.component.html',
  styleUrls: ['./paperwork.component.scss'],
})
export class PaperworkComponent {
  visible: boolean = false;
  filename: string = '';
  constructor(private sanitizer: DomSanitizer){}
  openDialog(filename: string) {
    this.filename = filename;
  }
}
