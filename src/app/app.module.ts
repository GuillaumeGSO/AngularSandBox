import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TrichMotMaterialComponent } from './trich-mot-material/trich-mot-material.component';
import { TrichMotSandBoxComponent } from './trich-mot-sand-box/trich-mot-sand-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRippleModule, MatListModule, MatGridListModule } from '@angular/material';
import { CustompipePipe } from './custompipe.pipe';

const appRoutes: Routes = [
  { path: 'trichMat', component: TrichMotMaterialComponent },
  { path: 'sandBox', component: TrichMotSandBoxComponent },
  { path: '**', component: AppComponent }
];
const matModules = [
  MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRippleModule, MatListModule, MatGridListModule
]

@NgModule({
  declarations: [
    AppComponent,
    TrichMotMaterialComponent,
    TrichMotSandBoxComponent,
    CustompipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    matModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {
  constructor(router:RouterModule) {}
 }
