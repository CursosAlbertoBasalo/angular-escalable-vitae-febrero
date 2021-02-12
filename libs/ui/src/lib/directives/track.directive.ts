/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TrackingService } from '../services/tracking.service';

@Directive({
  selector: '[vitaeUiTrack]',
})
export class TrackDirective {
  @Input('vitaeUiTrack') param?: string;
  @HostListener('click')
  onClick() {
    this.trackUserInteraction('click');
  }

  @HostListener('mouseover')
  onMouseover() {
    this.trackUserInteraction('mouseover');
  }
  constructor(private el: ElementRef, private tracking: TrackingService) {}

  private trackUserInteraction(action: string) {
    this.tracking.track({
      category: 'UserInteraction',
      action: action,
      param: this.getParam(),
    });
  }

  private getParam() {
    if (this.param) return this.param;
    const native = this.el.nativeElement;
    return (
      native.id || native.name || native.value || native.innerHTML || 'unknown'
    );
  }
}
