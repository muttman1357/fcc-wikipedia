import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AppModelService} from './models/app-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  searchOpen = false;
  items: any[] = [];
  private sub: Subscription;
  query: any;

  constructor(private appModelService: AppModelService) {}

  searchWiki() {
    if (this.query !== '') {
      this.items = [];
      this.appModelService.get(this.query).subscribe(
        data => {
          const pages = data.query.pages;
          for (const i in pages) {
            if (pages.hasOwnProperty(i)) {
              this.items.push(pages[i]);
            }
          }
        }
      );
    }

  }

  startSearch(e) {
    e.preventDefault();
    this.searchOpen = !this.searchOpen;
    if(!this.searchOpen) {
      this.query = '';
      this.items = [];
    }
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }
}
