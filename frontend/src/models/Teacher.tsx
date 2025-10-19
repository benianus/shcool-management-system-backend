export interface Teacher {
  id: number;
  name: string;
  email: string;
  status: boolean;
  user_id: number;
  course_id: number;
  deleted_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}
