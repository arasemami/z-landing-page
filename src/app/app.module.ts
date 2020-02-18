import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './container/index/index.component';
import { TopScreenComponent } from './components/index/top-screen/top-screen.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IndexAnimationComponent } from './components/animations/index-animation/index-animation.component';
import { MainButtonComponent } from './components/common/main-button/main-button.component';
import { IndexSolutionComponent } from './components/index/index-solution/index-solution.component';
import { IndexManifestoComponent } from './components/index/index-manifesto/index-manifesto.component';
import { PlayButtonComponent } from './components/common/play-button/play-button.component';
import { SimpleButtonComponent } from './components/common/simple-button/simple-button.component';
import { IndexNewsComponent } from './components/index/index-news/index-news.component';
import { IndexUserStoryComponent } from './components/index/index-user-story/index-user-story.component';
import { VideoPlayerComponent } from './components/index/top-screen/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    TopScreenComponent,
    IndexAnimationComponent,
    MainButtonComponent,
    IndexSolutionComponent,
    IndexManifestoComponent,
    PlayButtonComponent,
    SimpleButtonComponent,
    IndexNewsComponent,
    IndexUserStoryComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
