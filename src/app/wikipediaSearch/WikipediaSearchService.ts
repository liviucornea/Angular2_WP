import { Injectable } from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
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
            //let wikiUrl = 'https://en.wikipedia.org/w/api.php';
            //let queryString = `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;
            let wikiUrl = 'https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK';
            let search = new URLSearchParams()
            search.set('action', 'opensearch');
            search.set('search', term);
            search.set('format', 'json');
            return this.jsonp
            .get(wikiUrl, {search})
            .map(response => <string[]> response.json()[1]);
        }
}