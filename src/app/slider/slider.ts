import {
  Component,
  signal,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card/card';

interface ApiCard {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}

interface CardData {
  title: string;
  hashtag: string;
  subtitle: string;
  text: string;
  miniCardText: string;
  miniCardIcon: string;
  borderColor: string;
}

@Component({
  selector: 'app-slider',
  imports: [Card],
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  cards = signal<CardData[]>([]);
  showSpecialContent = signal(false);
  @Input() sidebarVisible = signal(false);
  borderColorSpecialCard = '#A4D071';

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef<HTMLDivElement>;

  apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  private maxScroll = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCards();
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateMaxScroll(), 100);
  }

  fetchCards() {
    this.http.get<{ listCard: ApiCard[] }>(this.apiUrl).subscribe({
      next: (res) => {
        const transformed: CardData[] = res.listCard.map((card, idx) => ({
          title: card.nameProduct,
          hashtag: card.numberProduct,
          subtitle: 'Ya cuentas con:',
          text: `$${Number(card.balanceProduct).toLocaleString()}`,
          miniCardText: card.detaildProduct,
          miniCardIcon: this.getMiniIcon(idx),
          borderColor: this.getBorderColor(idx),
        }));
        this.cards.set(transformed);
      },
      error: (err) => {
        console.error('Error al consumir la API', err);
      },
    });
  }

  getMiniIcon(index: number) {
    const icons = [
      'assets/Happy.png',
      'assets/Trofeo.png',
      'assets/Handheart.png',
      'assets/hand3.png',
    ];
    return icons[index] || 'assets/Happy.png';
  }

  getBorderColor(index: number) {
    const colors = ['#A4D071', '#A5D7E1', '#63AABC', '#FE9200'];
    return colors[index] || '#c4c7c4';
  }

  onSpecialButtonClick() {
    this.showSpecialContent.set(!this.showSpecialContent());
  }

  scrollLeft() {
    if (!this.cardsWrapper) return;

    const el = this.cardsWrapper.nativeElement;
    const scrollAmount = el.clientWidth; // desplazamiento igual a lo visible
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    // actualizar el maxScroll por si cambió
    setTimeout(() => this.updateMaxScroll(), 200);
  }

  scrollRight() {
    if (!this.cardsWrapper) return;

    const el = this.cardsWrapper.nativeElement;
    const scrollAmount = el.clientWidth; // desplazamiento igual a lo visible
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    setTimeout(() => this.updateMaxScroll(), 200);
  }

  canScrollPrev() {
    if (!this.cardsWrapper) return false;
    return this.cardsWrapper.nativeElement.scrollLeft > 5; // margen pequeño
  }

  canScrollNext() {
    if (!this.cardsWrapper) return false;
    return this.cardsWrapper.nativeElement.scrollLeft < this.maxScroll - 5;
  }

  private updateMaxScroll() {
    if (this.cardsWrapper) {
      const el = this.cardsWrapper.nativeElement;
      this.maxScroll = el.scrollWidth - el.clientWidth;
    }
  }
}
