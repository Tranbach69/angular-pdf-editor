import { Component } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  title = 'my-viewer-app';
  public page = 2;
  public pageLabel!: string;
}
