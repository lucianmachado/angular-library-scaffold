import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prefix-my-library',
  template: `
    <p>
      my-library works!
    </p>
  `,
  styles: [
  ]
})
export class MyLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
