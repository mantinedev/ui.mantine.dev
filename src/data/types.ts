export interface Category {
  slug: string;
  name: string;
  images: { dark: string; light: string };
}

export interface CategoriesGroup {
  name: string;
  categories: Category[];
}

export interface CanvasAttributes {
  responsive?: boolean;
  withColor?: boolean;
  dimmed?: boolean;
  author: string;
  canvas: { center: boolean; maxWidth?: number };
  category: string;
  dependencies: string[];
  title: string;
  props?: Record<string, any>;
}

export interface UiComponent {
  component: string;
  slug: string;
  code: string;
  attributes: CanvasAttributes;
}
