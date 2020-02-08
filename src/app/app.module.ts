import { PostsService } from "./components/CRUD/service/posts.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DesignOneComponent } from "./components/design-one/design-one.component";
//google map
// import { AgmCoreModule } from "@agm/core";
// import { NgwWowModule } from 'ngx-wow';
import { RouterModule, ExtraOptions } from "@angular/router";
//Other
import { routes } from "./routes";
import { HomeComponent } from "./components/iameveami/home/home.component";
//crud
import { CrudPostsComponent } from "./components/CRUD/crud-posts/crud-posts.component";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { PostsListComponent } from "./components/CRUD/posts-list/posts-list.component";

@NgModule({
  declarations: [
    AppComponent,
    DesignOneComponent,
    HomeComponent,
    CrudPostsComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
    // NgwWowModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyA_5VqYm-7vT6Bq6c7lWoB1K4Z8B-rH4MI',
    //   libraries: ['places']
    // })
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
