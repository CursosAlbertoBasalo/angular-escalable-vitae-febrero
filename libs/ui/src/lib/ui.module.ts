import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExplorerComponent } from './templates/explorer/explorer.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent, ExplorerComponent],
  exports: [TitleComponent, ExplorerComponent],
})
export class UiModule {}
