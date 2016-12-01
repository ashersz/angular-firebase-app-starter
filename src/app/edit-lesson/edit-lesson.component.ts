import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Lesson} from "../shared/model/lesson";
import {LessonsService} from "../shared/model/lessons.service";

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {
  lesson:Lesson
  lessonsService:LessonsService
  constructor(private route: ActivatedRoute) {
       route.data.do(console.log)
           .subscribe(
               data => this.lesson = data['lesson']
           )
  }
  save(lesson){
     this.lessonsService.saveLesson(this.lesson.$key, lesson)
         .subscribe(
             ()=>{
               alert('lesson saved successfully')
             },
             err => alert(`error saving lesson ${err}`)
         )
  }
  ngOnInit() {
  }

}
