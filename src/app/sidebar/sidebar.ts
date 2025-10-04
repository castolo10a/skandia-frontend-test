import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faComment,
  faFile,
  faHome,
  faStar,
  faUsd,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() isVisible = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  onToggleClick() {
    this.toggleSidebar.emit();
  }
  faHomeIcon = faHome;
  faFileIcon = faFile;
  faWrenchIcon = faWrench;
  faStarIcon = faStar;
  faUsdIcon = faUsd;
  faComentIcon = faComment;
}
