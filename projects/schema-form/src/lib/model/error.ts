
export interface Error {
  code: string;
  message: string;
  params: string[];
  path: string;
  title?: string;
}
