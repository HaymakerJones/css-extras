import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navItems = [
    { label: 'Backgrounds', path: '/backgrounds' },
    { label: 'Shapes', path: '/shapes' },
    { label: 'Visual Effects', path: '/visual-effects' },
    { label: 'Typography', path: '/typography' },
    { label: "User Experience", path: '/user-experience' }
  ];
}
