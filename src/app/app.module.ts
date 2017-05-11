import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { TourAgencyComponent } from './tour-agency/tour-agency.component';
import { OrderComponent } from './order/order.component';
import { TourMapComponent } from './tour-map/tour-map.component';
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { TourListComponent } from './tour-list/tour-list.component';
import { TourManagerComponent } from './tour-manager/tour-manager.component';
import { UserComponent } from './user/user.component';
import { TourGuideComponent } from './tour-guide/tour-guide.component';
import { TourGuideAutorizationService } from "app/_services/tour-guide-autorization/tour-guide-autorization.service";
import { TourManagerService } from "app/_services/tour-manager/tour-manager.service";
import { ToursService } from "app/_services/tours/tours.service";
import { TourBookService } from "app/_services/tour-book/tour-book.service";
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { TourDetailListComponent } from './tour-detail-list/tour-detail-list.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'tours', component: TourListComponent },
	{ path: 'tours/:name', component: TourListComponent },
	{ path: 'users', component: UserComponent },
	{ path: 'users/:name', component: UserComponent },
	{ path: 'guide', component: TourGuideComponent },
	{ path: 'guide/:name', component: TourGuideComponent },
	{ path: 'manager', component: TourManagerComponent },
	{ path: 'tour-map/:destinations', component: TourMapComponent },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		TourAgencyComponent,
		OrderComponent,
		TourMapComponent,
		PageNotFoundComponent,
		TourListComponent,
		TourManagerComponent,
		UserComponent,
		TourGuideComponent,
		HomeComponent,
		PhotosComponent,
		TourDetailListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCY5oUXFlVUkBomDDo7drhQWk2jF-nyPAQ'
		}),
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		TourManagerService,
		TourBookService,
		ToursService,
		TourGuideAutorizationService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

