import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() title!: string;
  @Input() hashtag!: string;
  @Input() subtitle!: string;
  @Input() text!: string;
  @Input() miniCardText!: string;

  constructor(private sanitizer: DomSanitizer) {}

  formatMiniCardText(): SafeHtml {
    if (!this.miniCardText) return '';
    // Reemplaza cualquier cifra con $ o % por un span con color
    const formatted = this.miniCardText.replace(
      /(\$\d+[\d,.]*|\d+%)/g,
      `<span style="color:#FE9200">$1</span>`
    );
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
  @Input() miniCardIcon!: string;
  @Input() borderColor!: string;
}
