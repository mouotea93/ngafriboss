import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {  
  FileHandle  
} from './file-handle';
import insertTextAtCursor from 'insert-text-at-cursor';
import {FormGroup,FormControl} from '@angular/forms';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-entreprise-detail',
  templateUrl: './entreprise-detail.component.html',
  styleUrls: ['./entreprise-detail.component.css']
})
export class EntrepriseDetailComponent implements OnInit {

  id = "pharmony";
  emoji="";
  background="#fff";
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  nbfiles: any=0;
  listemoji : any=[];

  emojiForm = new FormGroup({
    inputField: new FormControl()
    
}); 
  chatForm = new FormGroup({
    inputField: new FormControl()
    
}); 

searchForm = new FormGroup({
  label:new FormControl()
})

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template,
      { class: 'modal-lg modal-dialog-centered',
        ignoreBackdropClick: true, 
        keyboard: false
      })
    ;
  }
  openModalEmoji(modalEmoji: TemplateRef<any>) {
     this.modalRef2 = this.modalService.show(modalEmoji,
      { class: 'modal-md',
        ignoreBackdropClick: true, 
        keyboard: false
      })
    ;
  }
  toggled: boolean = false;
    handleSelection(event) {
      const el = document.getElementById('my-textarea');
      this.listemoji.push(event.char);
      this.emoji=event.char;
      insertTextAtCursor(el, event.char);
  }
  ngOnInit(): void {
  }
  uploadedFiles: FileHandle[];  
  filesDropped(files: FileHandle[]) {  
    
      this.uploadedFiles = files;  
      this.nbfiles = this.uploadedFiles.length
    
      
  }  

  files: File[] = [];
  filesFideo : File[]=[];
  emojiopen =false;
onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}
onSelectVideo(event) {
  console.log(event);
  this.filesFideo.push(...event.addedFiles);
}

onRemove(event) {
  //console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
onRemoveVideo(event) {
  //console.log(event);
  this.filesFideo.splice(this.filesFideo.indexOf(event), 1);
}
 addEmoji(event) {
   
  //const el = document.getElementById('my-textarea');
  //this.listemoji.push(event.char);
  //this.emoji=event.char;
  let data = this.emojiForm.get('inputField');
  data.patchValue(data.value + event.emoji.native);
  console.log(event.emoji);
  //insertTextAtCursor(el, event.char);
}
openEmoji(){
  if(this.emojiopen){
    this.emojiopen = false;
  }else{
    this.emojiopen = true;
  }
  
}


}
