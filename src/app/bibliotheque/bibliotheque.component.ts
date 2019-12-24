import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent  {

  depotArticles = [
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
  bibliothequeArticles = [
    
  ]





  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
