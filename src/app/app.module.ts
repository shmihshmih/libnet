import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { DocsComponent } from './docs/docs.component';
import { VideosComponent } from './videos/videos.component';
import { DigitalCatalogueComponent } from './digital-catalogue/digital-catalogue.component';
import { GrantsComponent } from './grants/grants.component';
import { NewsComponent } from './news/news.component';
import {RouterModule, Routes} from '@angular/router';
import { MagicKeyComponent } from './magic-key/magic-key.component';

const appRoutes: Routes = [
    { path: 'actions', component: ActionsComponent },
    { path: 'docs',      component: DocsComponent },
    { path: 'videos',      component: VideosComponent },
    { path: 'digital-catalogue',      component: DigitalCatalogueComponent },
    { path: 'grants',      component: GrantsComponent },
    { path: 'news',      component: NewsComponent },
    { path: 'magic-key',      component: MagicKeyComponent },
    { path: '',
        redirectTo: '/news',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    DocsComponent,
    VideosComponent,
    DigitalCatalogueComponent,
    GrantsComponent,
    NewsComponent,
    MagicKeyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
