export interface User {
  id: number;
  name: string;
  email: string;
}

export type ApiResponse = {
  success: boolean;
  data: any;
};
