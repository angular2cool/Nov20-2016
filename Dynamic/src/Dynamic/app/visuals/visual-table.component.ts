import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'visual-table',
    template: `<div></div>`
})

export class VisualTableComponent implements OnInit {

    @Input() url: string = '';
    domElement: HTMLElement;

    constructor(private elementRef: ElementRef, private dataService: DataService) {
        this.domElement = elementRef.nativeElement;
    }

    ngOnInit(): void {
        this.drawTable();
    }

    drawTable(): void {
        this.dataService.getDataObservable(this.url).subscribe(x => {
            let p = $(this.domElement).wrap('<table class="display" width="100%" cellspacing="0"></table>').parent();
            let table = p.DataTable({
                data: this.makeData(x),
                columns: [{ title: 'Date' }, { title: 'Revenue' }, { title: 'Units Sold' }]
            });
        });
    }

    makeData(rows: any): any[] {
        let retval = new Array<string[]>();
        for (let row of rows) {
            let r = new Array<string>();
            r.push(row['date']);
            r.push('$' + row['revenue']);
            r.push(row['unitSales']);
            retval.push(r);
        }

        return retval;
    }
}