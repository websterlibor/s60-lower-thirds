import { Component, OnInit } from '@angular/core';
import {StorageService} from "../storage.service";
import {LtProject} from "../lt-project";
import {Lt} from "../lt";

@Component({
  selector: 'app-lt-projects',
  templateUrl: './lt-projects.component.html',
  styleUrls: ['./lt-projects.component.less']
})
export class LtProjectsComponent implements OnInit {
  public projects: LtProject[] | undefined;
  public activeProjectIndex: number | undefined;
  public activeLtIndex: number | undefined;
  public showAddProject = false;
  public showAddLt = false;
  public sideNav = true;

  constructor(public storageService: StorageService) {
    if(!this.projects) {
      let projectsRaw = this.storageService.getItem('lt-projects');
      if(projectsRaw) {
        this.projects = JSON.parse(projectsRaw);
      } else {
        this.projects = [new LtProject()];
      }
    }
  }

  ngOnInit(): void {

  }

  selectProject(index: number) {
    this.activeProjectIndex = index;
    this.activeLtIndex = undefined;
    if(this.projects) {
      this.sideNav = false
    }

  }

  selectLt(index: number) {
    this.activeLtIndex = undefined;
    this.activeLtIndex = index;
    if(this.projects
      && this.activeProjectIndex != null
      && this.projects[this.activeProjectIndex]
      && this.projects[this.activeProjectIndex].lts
      && this.projects[this.activeProjectIndex].lts[index]) {
    }
    /*
    if(this.activeProject) {
      console.log('active lt', this.activeProject.lts[index]);
      this.activeLt = this.activeProject.lts[index];
    }*/
  }

  refreshProject() {
    let projectsRaw = this.storageService.getItem('lt-projects');
    if(projectsRaw) {
      this.projects = JSON.parse(projectsRaw);
    }
  }
  saveProject() {
    this.storageService.setItem('lt-projects', JSON.stringify(this.projects));
  }

  saveLt(lt: Lt) {
    if(this.projects
      && this.activeProjectIndex != null
      && this.activeLtIndex != null
      && this.projects[this.activeProjectIndex]
      && this.projects[this.activeProjectIndex].lts
      && this.projects[this.activeProjectIndex].lts[this.activeLtIndex]) {
      this.projects[this.activeProjectIndex].lts[this.activeLtIndex] = lt;
      //console.log('active lt', this.projects[this.activeProjectIndex].lts[this.activeLtIndex]);
      this.saveProject();
    }
  }

  addLt() {
    if(this.projects
      && this.activeProjectIndex != null) {
      let name = prompt("LT name", "New lt");
      if(name) {
        let lt = new Lt();
        lt.name = name;
        this.projects[this.activeProjectIndex].lts.push(lt);
        this.saveProject();
      }
    }
  }

  addProject() {
    if(this.projects) {
      let name = prompt("Project name", "New project");
      if(name) {
        let project = new LtProject();
        project.name = name;
        this.projects.push(project);
        this.saveProject();
      }
    }
  }

  renameProject(index: number, event: any) {
    if (this.projects
      && this.projects[index]) {
      let name = prompt("Project name", this.projects[index].name);
      if (name) {
        this.projects[index].name = name;
        this.saveProject();
      }
    }
  }

  deleteProject(index: number, event: any) {
    event.stopPropagation();
    if(this.projects
    && this.projects[index]) {
      let result = confirm('Do you really want to delete project ' +  this.projects[index].name + "?");
      if(result) {
        if(this.activeProjectIndex == index) {
          this.activeProjectIndex = undefined;
        }
        this.projects.splice(index,1);
        this.saveProject();
      }
    }
  }

  moveProject(index: number) {
    if(this.projects
      && this.projects[index]
      && this.projects[index]) {

      let tmp = this.projects[index-1];
      this.projects[index-1] = this.projects[index]
      this.projects[index] = tmp;
      this.saveProject();

    }
  }

  copyProject(index: number) {
    if(this.projects
      && this.projects[index]) {

      let tmp = JSON.parse(JSON.stringify(this.projects[index]));
      this.projects.splice(index+1, 0, tmp);

      this.saveProject();
    }
  }

  deleteLt(index: number, event: any) {
    event.stopPropagation();
    if(this.projects
      && this.activeProjectIndex != undefined
      && this.projects[this.activeProjectIndex].lts
      && this.projects[this.activeProjectIndex].lts[index]) {
      let result = confirm('Do you really want to delete LT ' +  this.projects[this.activeProjectIndex].lts[index].name + "?");
      if(result) {
        if(this.activeLtIndex == index) {
          this.activeLtIndex = undefined;
        }
        this.projects[this.activeProjectIndex].lts.splice(index,1);
        this.saveProject();
      }
    }
  }

  moveLt(index: number) {
    if(this.projects
      && this.activeProjectIndex != undefined
      && this.projects[this.activeProjectIndex]
      && this.projects[this.activeProjectIndex].lts
      && this.projects[this.activeProjectIndex].lts[index]
      && this.projects[this.activeProjectIndex].lts[index-1]) {

      let tmp = this.projects[this.activeProjectIndex].lts[index-1];
      this.projects[this.activeProjectIndex].lts[index-1] = this.projects[this.activeProjectIndex].lts[index]
      this.projects[this.activeProjectIndex].lts[index] = tmp;
      this.saveProject();

    }
  }

  copyLt(index: number) {
    if(this.projects
      && this.activeProjectIndex != undefined
      && this.projects[this.activeProjectIndex]
      && this.projects[this.activeProjectIndex].lts
      && this.projects[this.activeProjectIndex].lts[index]) {

      let tmp = JSON.parse(JSON.stringify(this.projects[this.activeProjectIndex].lts[index]));
      this.projects[this.activeProjectIndex].lts.splice(index+1, 0, tmp);

      this.saveProject();
    }
  }


}
