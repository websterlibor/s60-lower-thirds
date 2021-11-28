import {Component, Inject, Input, OnInit} from '@angular/core';
import {LtService} from "../lt.service";
import {DOCUMENT} from "@angular/common";
import {animate, style, transition, trigger} from "@angular/animations";
import {LtLine} from "../lt-line";

@Component({
  selector: 'app-lt',
  templateUrl: './lt.component.html',
  styleUrls: ['./lt.component.less'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translateX(-300px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 1, transform: 'translateX(-300px)' })),
      ]),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1})),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class LtComponent implements OnInit {
  @Input() public data: any | undefined;
  @Input() public test: boolean = false;
  @Input() public key: boolean = true;


  elem: any;
  fullscreen = false;

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {

    this.elem = document.documentElement;
  }

  changeFullscren() {
    if(!this.test) {
      if (this.fullscreen) {
        this.closeFullscreen();
      } else {
        this.openFullscreen();
      }
    }
  }


  openFullscreen() {
    this.fullscreen = true;
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
  closeFullscreen() {
    this.fullscreen = false;
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }



  show() {
    if(this.data && this.data.show) {
      if(this.data.duration != 0 && this.test != true) {
        setTimeout(() => {
          this.data.show = false;
        }, this.data.duration * 1000);
      }
      return true;
    } else {
      return false;
    }
  }

  getBgStyle(data: LtLine) {
    if(this.key && data.bgType != "none") {

      return "background-color: white; ";
    }

    let result = '';
    switch(data.bgType) {
      case "linear-gradient":
        result = 'background-image: linear-gradient('
          + data.bgGradientDirection + ", "
          + data.bgColor + ", "
          + data.bgColor2 + "); ";
        break;

      case "none":
        result = "";
        break;

      case "color":
      default:
        result = "background-color: " + data.bgColor + "; ";

    }
    return result;
  }

  getBgColor() {
    if(this.key || !this.data|| !this.data.type) {
      return 'background-color: black;'
    }

    if(this.data.bgcolor) {
      return "background-color: " + this.data.bgcolor + ";";
    } else {
      return 'background-color: #00ff00;';
    }
  }
  getZoom() {
    if(this.test) {
      return 'zoom: 100%; '
    }

    if(this.data.zoom) {
      return 'zoom: ' + this.data.zoom + '%; ';
    } else {
      return 'zoom: 100%; ';
    }
  }


  getTransform() {
    if(['rotate','skewY','skewX'].includes(this.data.transformType)) {
      return 'transform: ' + this.data.transformType + '(' + this.data.transformDegree + "deg); ";
    } else {
      return '';
    }
  }

  getColorStyle(line: LtLine) {
    if(this.key) {
      return 'color: white;'
    }

    if(line.color) {
      return "color: " + line.color + ";"
    } else {
      return "";
    }
  }
  getBorderStyle(line: LtLine) {
    if(line.border) {
      return "border: " + line.border + ";"
    } else {
      return "";
    }
  }

  getOpacityStyle(line: LtLine) {
    if(line.opacity) {
      return "opacity: " + (line.opacity / 10) + ";"
    } else {
      return "";
    }
  }

  getBorderColorStyle(line: LtLine) {
    if(this.key) {
      return "border-color: white;"
    }
    if(line.border) {
      return "border-color: " + line.borderColor + ";"
    } else {
      return "";
    }
  }

  getBorderRadiusStyle(line: LtLine) {
    if(line.borderRadius) {
      return "border-radius: " + line.borderRadius + ";"
    } else {
      return "";
    }
  }

  getPaddingStyle(line: LtLine) {
    if(line.padding) {
      return "padding: " + line.padding + ";"
    } else {
      return "";
    }
  }

  getMarginStyle(line: LtLine) {
    if(line.margin) {
      return "margin: " + line.margin + ";"
    } else {
      return "";
    }
  }

  getFontFamilyStyle(line: LtLine) {
    if(line.font) {
      return "font-family: " + line.font + ";"
    } else {
      return "";
    }
  }

  getFontStyleStyle(line: LtLine) {
    if(line.style) {
      return "font-style: " + line.style + ";"
    } else {
      return "";
    }
  }

  getFontWeightStyle(line: LtLine) {
    if(line.style) {
      return "font-weight: " + line.weight + ";"
    } else {
      return "";
    }
  }

  getTextAlignStyle(line: LtLine) {
    if(line.align) {
      return "text-align: " + line.align + ";"
    } else {
      return "";
    }
  }

  getPositionStyle() {
    let style = '';
    if(this.test == true) {
      style += 'lt-test-container d-flex ';
      if(['rt','rb'].includes(this.data.position)) {
        style += ' flex-row-reverse ';
      }
      if(['cm','ct','cb'].includes(this.data.position)){
        style += ' justify-content-center ';
      }
      return style;
    } else {
      style += 'lt-container d-flex ';
    }

    switch (this.data.position) {
      case "lt":
        style += "align-items-start";
        break;

      case "rt":
        style += "align-items-start  flex-row-reverse";
        break;

      case "rb":
        style += "align-items-end  flex-row-reverse";
        break;

      case "cm":
        style += "align-items-center justify-content-center";
        break;

      case "ct":
        style += "align-items-start justify-content-center";
        break;

      case "cb":
        style += "align-items-end justify-content-center";
        break;

      case "lb":
      default:
        style += "align-items-end";
        break;

    }
    return style;
  }
  getPositionMarginStyle(test: boolean = false) {
    let style = '';
    if(test) {
      style = "margin-bottom: 10px"
        + "; margin-left: 10px"
    } else {
      if(['lt','lb'].includes(this.data.position)) {
        style += "margin-left: " +  this.data.horizontal + "; ";
      }
      if(['rt','rb'].includes(this.data.position)) {
        style += "margin-right: " +  this.data.horizontal + "; ";
      }
      if(['lt','rt'].includes(this.data.position)) {
        style += "margin-top: " +  this.data.vertical + "; ";
      }
      if(['lb','rb'].includes(this.data.position)) {
        style += "margin-bottom: " +  this.data.vertical + "; ";
      }

    }
    return style;
  }


}
