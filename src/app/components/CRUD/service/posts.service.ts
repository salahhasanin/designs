import { Posts } from './../posts.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  post: Posts;
  constructor(private firebase: AngularFirestore) { }
  createPost(post) {
    return this.firebase.collection('posts').add(post);
  }

  getPost() {
    return this.firebase.collection('posts').snapshotChanges();
  }

  deletePost(id) {
    return this.firebase.doc('posts/' + id).delete();
  }

  updatePost(id, post) {
    return this.firebase.doc('posts/' + id).update(post)
  }
}
