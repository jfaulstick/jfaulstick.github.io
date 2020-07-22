import { SocialButtonComponent } from './social-button.component';

export default { title: 'Social Button'};

export const base = () => ({
  component: SocialButtonComponent,
  props: {
    
  }
});

export const large = () => ({
  component: SocialButtonComponent,
  props: {
    size: 'large'
  }
});

export const round = () => ({
  component: SocialButtonComponent,
  props: {
    shape: 'round'
  }
});

export const roundLarge = () => ({
  component: SocialButtonComponent,
  props: {
    shape: 'round',
    size: 'large'
  }
});