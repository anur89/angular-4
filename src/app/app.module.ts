import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipManagerDirective } from './tool-tip-directive/tooltip-manager.directive';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    TooltipManagerDirective,
    MainPageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
