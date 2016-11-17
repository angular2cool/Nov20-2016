import { Component, ComponentRef, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ComponentMappingService } from '../services/component-mapping.service';
import { Layout, LayoutRow, LayoutItem, LayoutParameter } from '../interfaces/layout.interface';

@Component({
    selector: 'visual',
    providers: [ComponentMappingService],
    template: `<div #visualChild></div>`
})
export class VisualComponent implements OnInit {
    @ViewChild('visualChild', { read: ViewContainerRef }) viewContainerRef;
    @Input() componentName: string;
    @Input() layoutItem: LayoutItem;
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private componentMappingService: ComponentMappingService)
    {
    }

    ngOnInit(): void {
        let component = this.componentMappingService.resolveName(this.componentName);
        let factory = this.componentFactoryResolver.resolveComponentFactory(component);
        let res = this.viewContainerRef.createComponent(factory);
        Object.assign(res.instance, this.layoutItem.parameters);
    }
}