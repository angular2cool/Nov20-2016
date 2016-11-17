import { Injectable } from '@angular/core';
import { VisualTableComponent } from '../visuals';
import { VisualChartComponent } from '../visuals';

interface HashTable<T> {
    [key: string]: T;
}

@Injectable()
export class ComponentMappingService {
    table: HashTable<any> = {};

    constructor() {
        this.table['visual-chart'] = VisualChartComponent;
        this.table['visual-table'] = VisualTableComponent;
    }

    resolveName(componentName: string): any {
        var retval = this.table[componentName];
        if (!retval) {
            console.log('No component found for ' + componentName);
        }
        return retval;
    }
}