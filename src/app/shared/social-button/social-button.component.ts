import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
})
export class SocialButtonComponent implements OnInit {
  @Input() bgcolor: string = 'primary';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() textColor: 'light' | 'dark' = 'light';
  @Input() shape: 'normal' | 'round' = 'normal';

  public classes: string[];

  constructor() {}

  ngOnInit(): void {
    this.classes = [
      'button',
      `${this.bgcolor}`,
      `${this.size}`,
      `${this.shape}`,
      `text-${this.textColor}`,
    ];
    console.log(this);
  }
}
