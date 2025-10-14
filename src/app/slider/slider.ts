import { Component, signal, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card/card';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  imports: [Card, FontAwesomeModule],
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  cards = signal<CardData[]>([]);
  faHeart = faHeart;
  showSpecialContent = signal(false);
  specialCardActivated = signal(false);
  maxScroll = 0;
  borderColorSpecialCard = '#A4D071';

  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef<HTMLDivElement>;

  apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCards();
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateMaxScroll(), 300);

    const el = this.cardsWrapper.nativeElement;
    el.addEventListener('scroll', () => this.updateMaxScroll());
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

  scrollLeft() {
    const el = this.cardsWrapper.nativeElement;
    const scrollAmount = el.clientWidth;

    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      this.updateMaxScroll();
      if (el.scrollLeft <= 5) {
        this.showSpecialContent.set(false);
        this.specialCardActivated.set(false);
      }
    }, 400);
  }

  scrollRight() {
    const el = this.cardsWrapper.nativeElement;
    const scrollAmount = el.clientWidth;

    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      this.updateMaxScroll();
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        this.specialCardActivated.set(true);
      }
    }, 400);
  }

  canScrollPrev() {
    if (!this.cardsWrapper) return false;
    return this.cardsWrapper.nativeElement.scrollLeft > 5;
  }

  canScrollNext() {
    if (!this.cardsWrapper) return false;
    return this.cardsWrapper.nativeElement.scrollLeft < this.maxScroll - 5;
  }

  isSpecialCardActive() {
    return this.specialCardActivated();
  }

  goToSpecialContent() {
    if (!this.isSpecialCardActive()) return;

    this.showSpecialContent.set(true);
    this.specialCardActivated.set(false);

    const section = document.querySelector('special-content');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private updateMaxScroll() {
    if (!this.cardsWrapper) return;
    const el = this.cardsWrapper.nativeElement;
    this.maxScroll = el.scrollWidth - el.clientWidth;
  }
}
