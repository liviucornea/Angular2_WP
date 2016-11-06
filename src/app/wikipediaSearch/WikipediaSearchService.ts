import { Injectable } from '@angular/core';
import {Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Observable'
@Injectable()
export class WikipediaSearchService {
    
    constructor(private jsonp: Jsonp) { }

    search ( terms: Observable<string>, debounceMs = 400){
        return terms.debounceTime(debounceMs)
                    .distinctUntilChanged()
                    .switchMap(term => this.rawSearch(term));
    }
    rawSearch (term: string) {
            let wikiUrl = 'https://en.wikipedia.org/w/api.php';
            let queryString = `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;
            return this.jsonp
            .get(wikiUrl + queryString)
            .map(response => <string[]> response.json()[1]);
        }
}
