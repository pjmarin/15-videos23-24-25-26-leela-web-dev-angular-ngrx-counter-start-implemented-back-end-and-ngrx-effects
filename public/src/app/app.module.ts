import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// These 4 components for counter have been moved to src\app\counter\counter.module.ts

// import { CounterComponent } from './counter/counter/counter.component';
// import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
// import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
// import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';
// import { AddPostComponent } from './posts/add-post/add-post.component';
// import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { HeaderComponent } from './shared/components/header/header.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
// import { appReducer } from './store/app.state'; // No need to initialize our store in the home page, where we dont need counter neither posts data
// import { counterReducer } from './counter/state/counter.reducer';
// import { postsReducer } from './posts/state/posts.reducer';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent, // These 4 components for counter have been moved to src\app\counter\counter.module.ts
    // CounterOutputComponent, // These 4 components for counter have been moved to src\app\counter\counter.module.ts
    // CounterButtonsComponent, // These 4 components for counter have been moved to src\app\counter\counter.module.ts
    // CustomCounterInputComponent, // These 4 components for counter have been moved to src\app\counter\counter.module.ts
    HomeComponent,
    HeaderComponent,
    // PostsListComponent, // These 3 components for posts have been moved to src\app\posts\posts.module.ts
    // AddPostComponent, // These 3 components for posts have been moved to src\app\posts\posts.module.ts
    // EditPostComponent // These 3 components for posts have been moved to src\app\posts\posts.module.ts
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    // StoreModule.forRoot({ counter: counterReducer, posts: postsReducer }), // dentro del objeto podemos pasar mas propiedades con el valor de su correspondiente reducer
    // StoreModule.forRoot(appReducer), // No need to initialize our store in the home page, where we dont need counter neither posts data
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
