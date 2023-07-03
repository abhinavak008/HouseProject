import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    //template:`<h1>I'm a card</h1>`,
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']

    //styles:['h1{font-weight:normal}']
})
export class PropertCardComponent{
    property:any={
        "Id":1,
        "Name": "Abhinav's House",
        "Type":"House",
        "Price":12000
    }

}