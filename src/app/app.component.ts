import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.loadIcons();
  }

  private loadIcons(): void {
    this.loadIcon(`linkedin`, `../assets/linkedin-box.svg`);
    this.loadIcon(`stack-overflow`, `../assets/stack-overflow.svg`);
    this.loadIcon(`github`, `../assets/github-box.svg`);
  }

  private loadIcon(name: string, path: string): void {
    this.matIconRegistry.addSvgIcon(
      name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(path)
    );
  }
}
