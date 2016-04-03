import {AuthClass} from './auth.class'
import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'
import {Inject} from 'angular2/core'
import {Injectable} from 'angular2/core'
import {Http, Headers} from 'angular2/http'

@Injectable()
export class ListService {

    private httpService: Http;

    constructor(http: Http) {
        this.httpService = http;
    }

    getItems(): Observable<any> {

        return Observable.create(observer => {

            AuthClass.getAccessToken().subscribe(token => {

                if (token.length > 0) {
                    this.httpService.get(AuthClass.endpoint, {
                        headers: new Headers(
                            {
                                "Authorization": "Bearer " + token,
                                "Accept": "application/json"
                            }
                        )
                    }).subscribe(res => {
                        if (res.status === 200) {
                            observer.next(res.json().value);
                        }
                        else {
                            observer.error(res.status);
                        }
                    });
                }

            });

        });
    }

    addItem(title: string, body: string): Observable<any> {

        return Observable.create(observer => {

            AuthClass.getAccessToken().subscribe(token => {

                if (token.length > 0) {
                    this.httpService.post(
                        AuthClass.endpoint,
                        JSON.stringify({
                            "Title": title,
                            "Body":body
                        }),
                        { headers: new Headers(
                            {
                                "Authorization": "Bearer " + token,
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            })
                        }
                    ).subscribe(res => {
                        if (res.status === 201) {
                            observer.next(true);
                        }
                        else {
                            observer.error(res.status);
                        }
                    });
                }

            });
 
        });
    }

}