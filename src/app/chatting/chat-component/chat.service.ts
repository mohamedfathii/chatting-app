

import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChatService {

    constructor(private httpClient: HttpClient) {

    }
    public getMessageList(): Observable<any> {
        return this.httpClient.get('src/assets/api/data.json')
            .map((res: any) => res.json());
        // .catch((error: any) => console.log(error));

    }
}
