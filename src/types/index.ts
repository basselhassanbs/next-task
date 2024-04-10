export interface Option {
  id: number;
  name: string;
  child: boolean;
}

export interface IProperty {
  id: number;
  name: string;
  option: Option[];
}

export interface Category {
  id: number;
  name: string;
}

export interface MainCategory {
  id: number;
  name: string;
  children: Category[];
}
