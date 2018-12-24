import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DxButtonModule, DxTextBoxModule, DxTextAreaModule, DxValidatorModule} from 'devextreme-angular';

import {AppComponent} from './app.component';
import {routing} from './app-routing.module';

import {PostService, UserService, ArticlesService, TagService} from './services';

import {LoginComponent, SignUpComponent, ProfileComponent} from './components/md-auth';
import { HomeComponent, NavbarComponent, NewsComponent, NetworkComponent, QuestionComponent,
  ArticlesComponent, InboxComponent, UserComponent, QuestionAnswersComponent } from './components';
import { PostListComponent, PostItemComponent, CommentFormComponent, ComposeFormComponent } from './components/news/';
import { ArticleListComponent, ArticleItemComponent, DraftComponent, WriteArticleComponent, PreviewComponent } from './components/articles';

const SERVICES = [
  PostService,
  UserService,
  ArticlesService,
  TagService
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NewsComponent,
    ArticlesComponent,
    InboxComponent,
    NetworkComponent,
    QuestionComponent,
    NavbarComponent,
    PostListComponent,
    PostItemComponent,
    CommentFormComponent,
    ComposeFormComponent,
    ArticleItemComponent,
    DraftComponent,
    WriteArticleComponent,
    PreviewComponent,
    UserComponent,
    ProfileComponent,
    QuestionAnswersComponent,
    ArticleListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxTextAreaModule,
    routing
  ],
  providers: [
    ...SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
