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
    { label: "User Experience", path: '/user-experience' },
    { label: "Structure and Layout", path: '/structure-layout' },
    { label: 'Transitions and Animations', path: '/animations' },
    { label: 'CSS Grid', path: '/grid' },
    { label: 'Pseudo Elements', path: '/pseudo' },
    { label: 'Transitions', path: '/transitions' },
    { label: 'Flex', path: '/flex' },
    { label: 'Box Shadows', path: '/box-shadow' },
  ];
}
