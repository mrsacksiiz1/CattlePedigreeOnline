import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  } from '@angular/material';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleNavbarComponent } from './theme/example-navbar/example-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './page/home/home.component';
import { RecordComponent } from './page/record/record.component';
import { OrderComponent } from './page/order/order.component';
import { SearchComponent } from './page/search/search.component';
import { FollowComponent } from './page/follow/follow.component';
import { MainComponent } from './page/main/main.component';
import { FooterComponent } from './theme/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Pagenotfound404Component } from './page/pagenotfound404/pagenotfound404.component';
import { DialogdataComponent } from './page/follow/dialogdata(status)/dialogdata.component';
import { DialogdatadeleteComponent } from './page/follow/dialogdata(delete)/dialogdatadelete.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleNavbarComponent,
    HomeComponent,
    RecordComponent,
    OrderComponent,
    SearchComponent,
    FollowComponent,
    MainComponent,
    FooterComponent,
    Pagenotfound404Component,
    DialogdataComponent,
    DialogdatadeleteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgbModule.forRoot()
   
  ],
  entryComponents:[
    DialogdataComponent,
    DialogdatadeleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
