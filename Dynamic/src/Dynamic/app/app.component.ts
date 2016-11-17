import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Layout } from './interfaces/layout.interface';

@Component({
    selector: 'app',
    providers: [DataService],
    templateUrl: 'app.template.html'
})
export class AppComponent {
    layout: Layout = null;

    constructor(public dataService: DataService) {
        dataService.getDataObservable('/api/Layout/SalesDataForSku/AMM-223').subscribe(x => {
            this.layout = <Layout><any>x;
        });
    }
}
