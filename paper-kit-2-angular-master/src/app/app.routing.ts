import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './examples/landing/landing.component';
import { MembersDetailsComponent } from './components/members-details/members-details.component';
import { HistoryComponent } from './components/history/history.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    { path: 'directory' , component: MembersDetailsComponent },
    { path: 'history' , component: HistoryComponent },
    { path: 'gallery' , component: GalleryComponent },
    { path: 'aboutus' , component: AboutusComponent },
    { path: 'contactus' , component: ContactusComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
