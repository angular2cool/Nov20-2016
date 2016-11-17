import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'visual-chart',
    template: `<div></div>`
})

export class VisualChartComponent implements OnInit {
    @Input() width = 600;
    @Input() height = 800;
    @Input() title = 'Unit Sales by Date';
    @Input() url: string = '';
    domElement: HTMLElement;
    googleChart: any;

    constructor(private elementRef: ElementRef, private dataService: DataService) {
        this.domElement = elementRef.nativeElement;
    }

    ngOnInit(): void {
        this.drawChart();
    }

    drawChart(): void {
        this.googleChart = new google.visualization.BarChart(this.domElement);
        let options = {
            'title': this.title,
            'width': this.width,
            'height': this.height,
            'is3D': true,
            'legend': 'left',
        };

        this.dataService.getDataObservable(this.url).subscribe(x => {
            this.googleChart.draw(this.makeData(x), options);
        });
    }

    makeData(rows: any): google.visualization.DataTable {
        let data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Unit Sales');
        for (let row of rows) {
            data.addRow([new Date(row['date']), row['unitSales']]);
        }
        return data;
    }
}