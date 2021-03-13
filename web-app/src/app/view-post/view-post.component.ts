import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service'; 
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post: any;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('postId');
    this.blogService.getPosts().subscribe(postsList => {
      postsList.forEach((post) => {
        if(post.id == id)
          this.post = {...post};
      })
    })
  }
}
