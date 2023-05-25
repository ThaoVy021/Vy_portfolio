import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'portfolio-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
})
export class MenuComponent {
  activeButton: string | undefined;

  ngOnInit() {
    this.activeButton = 'home'; // Set the default active button to 'home'
  }

  setActiveButton(button: string) {
    this.activeButton = button;
  }
}
