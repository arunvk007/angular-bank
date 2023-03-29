import { Component } from '@angular/core';
import {animate,trigger,style,state,transition} from '@angular/animations'

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations:[
    trigger("openClose",[
      state("open",style({
        height:'500px',
        backgroundColor:'blue'
      })),
      state("close",style({
        height:'250px',
        backgroundColor:'red'
      })),
      transition("open=>close",[animate('2s')]),
      transition("close=>open",[animate('3s')])

    ])
  ]


})
export class AnimationDemoComponent {

  isOpen=true

  trigger(){
    this.isOpen=!this.isOpen
  }

}
