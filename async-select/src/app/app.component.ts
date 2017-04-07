import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedCountry$ = new Subject().do(data => { console.log(`country: ${data}`); }).share();
  selectedCity$ = new Subject().do(data => { console.log(`city: ${data}`); }).share();

  countries$: Observable<any>;
  cities$: Observable<any>;

  ngOnInit() {
    this.countries$ = Observable.of(['US', 'JP']);

    this.cities$ = this.selectedCountry$.switchMap(country => {
      switch (country) {
        case 'US':
          return Observable.of(['Salt Lake City', 'New York']);
        case 'JP':
          return Observable.of(['Tokyo', 'Kyoto']);
      }
    });
  }
}
