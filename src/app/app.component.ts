import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'jp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public descriptionType = 0;
  private animationEnabled = true;
  @ViewChildren('toggleAnim') toggleAnim: QueryList<ElementRef>;

  public onMenuHover(menuType: number) {
    if (this.animationEnabled) {
      this.animationEnabled = false;
    }
    this.descriptionType = menuType;
  }
}
