import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app',
    providers: [DataService],
    templateUrl: 'app.template.html'
})
export class AppComponent {
    constructor(public dataService: DataService) {
    }
}

class SalesData {
    constructor(public date: Date, public revenue: number, public unitSales: number) { }
}
