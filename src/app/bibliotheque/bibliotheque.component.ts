import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from "../json/data.json"






@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})

export class BibliothequeComponent  {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

  }



  
  bibliothequeArticles = [
    {
      id: 1,
      label: "titre1", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },
    {
      id: 2,
      label: "titre2", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },    
    {
      id: 3,
      label: "titre3", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },    
    {
      id: 4,
      label: "titre4", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },    
    {
      id: 5,
      label: "titre5", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },    
    {
      id: 6,
      label: "titre6", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },
    
  ];
  depotArticles = [
    {
      id: 6,
      label: "titre6", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },

  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
     
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);                        
    }
  }   

  open(content) {
    this.modalService.open(content);
  }
  ngOnInit() {
    const importation =  (data  as  any).default
    this.bibliothequeArticles.push(importation);
    console.log(importation)
    console.log(this.bibliothequeArticles)
  }
  edit(){

    
  }

}
