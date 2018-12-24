import {Routes, RouterModule} from '@angular/router';

import {LoginComponent, SignUpComponent} from './components/md-auth';
import {
  HomeComponent,
  NewsComponent,
  ArticlesComponent,
  QuestionAnswersComponent,
  NetworkComponent,
  InboxComponent
} from './components';

import {ArticleListComponent, DraftComponent, WriteArticleComponent} from './components/articles';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: NewsComponent},
      {path: 'feed', component: NewsComponent},
      {
        path: 'articles',
        component: ArticlesComponent,
        children: [
          {path: '', component: ArticleListComponent},
          {path: 'drafts', component: DraftComponent},
          {path: 'writearticle', component: WriteArticleComponent},
        ],
      },
      {path: 'question', component: QuestionAnswersComponent},
      {path: 'network', component: NetworkComponent},
      {path: 'inbox', component: InboxComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignUpComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
