import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-entreprise-article-edit',
  templateUrl: './entreprise-article-edit.component.html',
  styleUrls: ['./entreprise-article-edit.component.css']
})
export class EntrepriseArticleEditComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }
  articleForm = new FormGroup({
    label:new FormControl()
  })
}
