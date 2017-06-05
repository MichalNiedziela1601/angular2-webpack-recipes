import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css').toString()]
})
export class AppComponent {

    loadedFeature = 'recipe';

    onNavigate(event: string){
        this.loadedFeature = event;
    }
}
