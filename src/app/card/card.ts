import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  @Input() miniCardIcon!: string;
  @Input() borderColor!: string;
}
