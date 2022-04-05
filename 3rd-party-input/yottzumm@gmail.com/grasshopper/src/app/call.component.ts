import { Component } from '@angular/core';

@Component({
	selector: '#call',
	template: ''
})
export class Call {
  teacher: HTMLElement;
  student: HTMLElement;
  constructor() {
	this.student = <HTMLElement>document.getElementById('student');
	if (this.student !== null) {
		(<HTMLInputElement>this.student).value = "student";
	}
	this.teacher = <HTMLElement>document.getElementById('teacher');
	if (this.teacher !== null) {
		(<HTMLInputElement>this.teacher).value = "teacher";
	}
  }
  getTeacherValue() {
	this.teacher = <HTMLElement>document.getElementById('teacher');
	return (<HTMLInputElement>this.teacher).value;

  }
  getStudentValue() {
	this.student = <HTMLElement>document.getElementById('student');
	return (<HTMLInputElement>this.student).value;
  }
}
