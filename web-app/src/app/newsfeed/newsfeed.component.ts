import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service'; 

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  posts: any;
  anotherposts: any;
  postsViewed: number;
  totalPosts: number;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.postsViewed = 6;
    this.blogService.getPosts().subscribe(postsList => {
      this.posts = [];
      this.totalPosts = postsList.length;
      postsList.forEach((post) => {
        const data = {...post};
        if(post.id<=this.postsViewed)
          this.posts.push(data);
      })
    })
  }

  showMore() {
    let moreContent = document.getElementById('show-more-less');
    moreContent.setAttribute("style", "display: block");
    let showBtn = document.getElementById('showBtn');
    showBtn.setAttribute("style", "display: none");

    this.blogService.getPosts().subscribe(postsList => {
      this.anotherposts = [];
      postsList.forEach((post) => {
        const data = {...post};
        if(data.id>this.postsViewed-6)
          this.anotherposts.push(data);
      })
    })

    this.postsViewed += 6;
  }

}
