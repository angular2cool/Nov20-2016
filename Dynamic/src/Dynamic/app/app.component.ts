import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app',
    providers: [DataService],
    templateUrl: 'app.template.html'
})
export class AppComponent {
    salesData: SalesData[];
    constructor(public dataService: DataService) {
        this.salesData = new Array<SalesData>();
        dataService.getDataObservable('/api/ProductSales/ForSku/AMM-223').subscribe(data => {
            for (let dataPoint of data) {
                this.salesData.push(new SalesData(dataPoint['date'], dataPoint['revenue'], dataPoint['unitSales']));
            }
        });
    }

    doPut(): void {
        let body = new SalesData(new Date(2016, 11, 12), 2300.0, 78);
        this.dataService.putDataObservable('/api/ProductSales/ForSku/AMM-223', JSON.stringify(body)).subscribe(result => {
            console.log(result);
        });
    }
}

class SalesData {
    constructor(public date: Date, public revenue: number, public unitSales: number) { }
}
