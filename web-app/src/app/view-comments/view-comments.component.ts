import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service'; 

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {
  comments: any;
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getComments().subscribe(commentsList => {
      this.comments = [];
      commentsList.forEach((comment) => {
        const data = {...comment};
          this.comments.push(data);
      })
    })
  }
}
