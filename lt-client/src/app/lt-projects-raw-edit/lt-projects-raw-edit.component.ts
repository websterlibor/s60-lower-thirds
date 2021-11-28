import { Component, OnInit } from '@angular/core';
import {StorageService} from "../storage.service";
import {LtProject} from "../lt-project";
import {JsonEditorOptions} from "ang-jsoneditor";

@Component({
  selector: 'app-projects-raw-edit',
  templateUrl: './lt-projects-raw-edit.component.html',
  styleUrls: ['./lt-projects-raw-edit.component.less']
})
export class LtProjectsRawEditComponent implements OnInit {
  public data: any = {}
  public options = new JsonEditorOptions();
  constructor(public storageService: StorageService) {
    this.data = this.getData();
    this.options.mode = "code";
    this.options.modes = ["code", "text", "tree", "view"];
    // this.options.schema = schema;
    this.options.statusBar = false;
  }

  ngOnInit(): void {
  }

  getData() {
    let projectsRaw = this.storageService.getItem('lt-projects');
    if(projectsRaw) {
      return JSON.parse(projectsRaw);
    } else {
      return "No projects data";
    }

  }

  getRawData() {
    return JSON.stringify(this.data, null, 2);
  }

  save() {
    this.storageService.setItem('lt-projects', JSON.stringify(this.data));
  }

}
