import { Component } from '@angular/core';
import { EmojiService } from './emoji.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(emoji: EmojiService) {
    this.title += emoji.cat;
  }

  ngOnInit() {
    this.title = 'onInit was run!';
  }
}
