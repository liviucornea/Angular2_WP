import { Component, OnInit} from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { WikipediaSearchService } from './WikipediaSearchService';
import '../rxjs-operators';

@Component({
  selector: 'my-wiki-search',
  templateUrl: './wikiSearch.html',
  styles: [require('../dashboard/dashboard.component.css')]
  
})
export class WikiSearchComponent implements OnInit {
  
        title = `Wiki Search !`;
        fetches = 'Fetches when typing stops';
        items: Array<string>;
        observableItems : Observable<string[]>;
        private searchTermStream$ = new Subject<string>();

        search(term: string) { this.searchTermStream$.next(term); }
      
        constructor (private service: WikipediaSearchService) {

        }

        ngOnInit(){
          // please note that you can displa items straight on ui using  | async from observable or by subscribing 
          // to observable and populate this.items  
          
          // get items like observable stream
          this.observableItems = this.service.search(this.searchTermStream$);
          // get ready for items when they come
          this.service.search(this.searchTermStream$)
            .subscribe( response => this.items =  response);
    
        }
 }