import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from "../json/data.json";
import * as html2pdf from "html2pdf.js";














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
  depotArticles = []

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

  }

  

  generatePDF(){
    let preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    let postHtml = "</body></html>";
    let depotArticles = this.depotArticles
    let pdf = ""
    
    
    for (let article of depotArticles){
      pdf += "<div>" + article.label + "</div> <br> <div>" + article.content + "</div><br>"
    }
    
    
    let html = preHtml+"<h1>Votre liste</h1>" + pdf + postHtml;
    let generate = document.querySelector(".editDoc-container");
    let newDiv = document.createElement("div");
    newDiv.className = "generatePdf";
    newDiv.innerHTML = html;
    generate.appendChild(newDiv);


    

    const option= {
      filename: "test.pdf",
      image: {type:"jpeg"},
      html2canvas:{},
      jsPDF: { format  : "a4"}
    }

    const content : Element = document.querySelector(".generatePdf");


    html2pdf()
    .from(content)
    .set(option)
    .save()
    generate.removeChild(newDiv)
 

     

  
  }
  
   Export2Doc(filename = ''){
     
    let preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    let postHtml = "</body></html>";
    let depotArticles = this.depotArticles
    let docx = ""
    
    
    for (let article of depotArticles){
      docx += "<div>" + article.label + "</div> <br> <div>" + article.content + "</div><br>"
    }
    
    
    let html = preHtml+"<h1>Votre liste</h1>" + docx + postHtml;



     let blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    let url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    let downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink); 
}

}
