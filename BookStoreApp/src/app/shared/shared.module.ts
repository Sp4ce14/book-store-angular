import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    MaterialModule
  ],
  exports: [ToolbarComponent, FooterComponent, MaterialModule]
})
export class SharedModule { }
