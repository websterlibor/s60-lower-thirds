import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JsonEditorOptions} from "ang-jsoneditor";
import {LtService} from "../lt.service";
import {Lt} from "../lt";
import {LtProject} from "../lt-project";
import {LtLine} from "../lt-line";

@Component({
  selector: 'app-lt-composer',
  templateUrl: './lt-composer.component.html',
  styleUrls: ['./lt-composer.component.less']
})
export class LtComposerComponent implements OnInit {
  @Output() public updateParent = new EventEmitter<Lt>();
  @Input() public data: Lt | undefined;

  public tmpData: Lt | undefined;
  public options = new JsonEditorOptions();
  public type = 'linear';

  constructor(public ltService: LtService) {
    this.options.mode = "code";
    this.options.modes = ["code", "text", "tree", "view"];
    // this.options.schema = schema;
    this.options.statusBar = false;
  }

  ngOnInit(): void {
    if(this.data) {
      //this.tmpData = this.data;
    }
  }


  showPreview() {
    let data = JSON.parse(JSON.stringify(this.data));
    data.show = true;
    if(this.type == 'linear') {
        data.bgcolor = "black";
    }
    this.ltService.sendToPreview(data);
  }

  hidePreview() {
    let data = JSON.parse(JSON.stringify(this.data));
    data.show = false;
    this.ltService.sendToPreview(data);
  }

  showProgram() {
    let data = JSON.parse(JSON.stringify(this.data));
    data.show = true;
    data.type = this.type;
    if(this.type == 'linear') {
      data.bgcolor = "black";
    }
    this.ltService.sendToPublic(data);
  }

  hideProgram() {
    let data = JSON.parse(JSON.stringify(this.data));
    data.show = false;
    this.ltService.sendToPublic(data);
  }

  saveLt() {

    this.updateParent.emit(this.data);
  }

  addLine() {
    if(this.data && this.data.lines) {
      let line = new LtLine();
      this.data.lines.push(line);
    }
  }


  deleteLine(index: number, event: any) {
    event.stopPropagation();
    if(this.data
      && this.data.lines
      && this.data.lines[index]) {
      let result = confirm('Do you really want to delete line?');
      if(result) {
        this.data.lines.splice(index,1);
      }
    }
  }


  moveLine(index: number, event: any) {
    event.stopPropagation();
    if(this.data
      && this.data.lines
      && this.data.lines[index]
      && this.data.lines[index-1]) {

      let tmp = this.data.lines[index-1];
      this.data.lines[index-1] = this.data.lines[index]
      this.data.lines[index] = tmp;

    }
  }

  copyLine(index: number, event: any) {
    event.stopPropagation();
    if(this.data
      && this.data.lines
      && this.data.lines[index]) {

      let tmp = JSON.parse(JSON.stringify(this.data.lines[index]));
      this.data.lines.splice(index+1, 0, tmp);

    }
  }
}
