import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtLocationComponent } from './atoms/at-location/at-location.component';
import { OnTimeComponent } from './atoms/on-time/on-time.component';
import { ResultsHeaderComponent } from './molecules/results-header/results-header.component';
import { CardComponent } from './templates/card/card.component';
import { ExplorerComponent } from './templates/explorer/explorer.component';
import { TitleComponent } from './title/title.component';
import { WaitingMessageComponent } from './molecules/waiting-message/waiting-message.component';
import { ErrorMessageComponent } from './molecules/error-message/error-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TitleComponent,
    ExplorerComponent,
    ResultsHeaderComponent,
    CardComponent,
    OnTimeComponent,

    AtLocationComponent,

    WaitingMessageComponent,

    ErrorMessageComponent,
  ],
  exports: [
    TitleComponent,
    ExplorerComponent,
    ResultsHeaderComponent,
    CardComponent,
    OnTimeComponent,

    AtLocationComponent,

    WaitingMessageComponent,

    ErrorMessageComponent,
  ],
})
export class UiModule {}
