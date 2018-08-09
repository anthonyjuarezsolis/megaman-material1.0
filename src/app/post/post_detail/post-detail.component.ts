import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html'
})
export class PostDetailComponent {

    public post = {};
    constructor(private postService: PostService) {

    }

    getPost() {
        this.postService.byIdPost(10)
            .subscribe(post => console.log(post));
    }
}
