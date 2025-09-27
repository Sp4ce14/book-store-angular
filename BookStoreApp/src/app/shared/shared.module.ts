import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ToolbarComponent]
})
export class SharedModule { }
