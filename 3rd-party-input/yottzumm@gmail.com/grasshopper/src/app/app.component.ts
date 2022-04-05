import { Component } from '@angular/core';

@Component({
	selector: '#{{id}}',
	template: ''
})
export class MenuItem {
	id: string;
	name: string;
	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}
}

class Menu {
	name: string;
	items: MenuItem[];
	constructor(name: string, items: MenuItem[]) {
		this.name = name;
		this.items = items;
	};
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Component controller
export class AppComponent {
  title = 'grasshopper';
  id: string;
  teacherview: string;
  teachermodify: string;
  teacherdelegate: string;
  menus: Menu[];
  
  constructor() {
    this.id = 'teacher_project';
    this.teacherview = 'Alice';
    this.teachermodify = 'Alice';
    this.teacherdelegate = 'Alice';
    this.menus = new Array<Menu>();
    this.menus.push(new Menu(
			"Teacher",
			[

				new MenuItem(
					"search_courses",
					"Search Courses"
				),
				new MenuItem(
					"search_blogs",
					"Search Blogs"
				),
				new MenuItem(
					"search_students",
					"Search for Students"
				),
				new MenuItem(
					"search_teachers",
					"Search for Teachers"
				),
				new MenuItem(
					"teacher_courses",
					"My Courses"
				),
				new MenuItem(
					"teacher_newcourse",
					"Add a New Course"
				),
				new MenuItem(
					"teacher_project",
					"Project Course"
				),
				new MenuItem(
					"teacher_manual",
					"Teacher Manual"
				),
				new MenuItem(
					"teacher_profile",
					"Teacher Profile"
				),
				new MenuItem(
					"teacher_delegate",
					"Delegate to Another Teacher"
				)
			]
		));
	this.menus.push(new Menu(
			"Student",
			[
				new MenuItem(
					"search_courses",
					"Search Courses"
				),
				new MenuItem(
					"search_blogs",
					"Search Blogs"
				),
				new MenuItem(
					"search_students",
					"Search for Students"
				),
				new MenuItem(
					"search_teachers",
					"Search for Teachers"
				),
				new MenuItem(
					"student_courses",
					"My Courses"
				),
				new MenuItem(
					"student_newcourse",
					"Sign up for a Course"
				),
				new MenuItem(
					"student_manual",
					"Student Manual"
				),
				new MenuItem(
					"student_profile",
					"Student Profile"
				)
			]));
   }
   onClick(id : string) {
	let element = document.getElementById(this.id);
	if (element !== null) {
		element.style.display = "none";
	}
	this.id = id;
	element = document.getElementById(this.id);
	if (element !== null) {
		element.style.display = "block";
	}
   }
}
