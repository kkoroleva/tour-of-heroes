
export interface Set1 {
  id: number;
  title: string;
  description?: string;
}

export interface Set2 {
  id: number;
  releaseDate?: string;
  qtyRelease: number;
}

export interface Book extends Set1, Set2 {

}
