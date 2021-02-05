import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class HeadService {
  private titleBase = `Booster | `;

  constructor(private title: Title, private meta: Meta) {}

  public setTitle(titlePart: string): void {
    this.title.setTitle(this.titleBase + titlePart);
  }

  public setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }
}
