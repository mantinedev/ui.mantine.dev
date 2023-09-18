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
  canvas: { center: boolean; maxWidth?: number };
  category: string;
  title: string;
  props?: Record<string, any>;
}

export interface UiComponent {
  component: string;
  slug: string;
  code: { fileName: string; language: string; code: string }[];
  attributes: CanvasAttributes;
}
