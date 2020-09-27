/*article*/
export class IArticle {
  _id: string;
  id: number;
  __v: number;
  createdAt: string;
  sourceData: SourceData;
  updatedAt: string;
}

/*语鹊user*/
export class IYuqueUser {
  id: number;
  type: string;
  login: string;
  name: string;
  description: string;
  avatar_url: string;
  followers_count: number;
  following_count: number;
  created_at: string;
  updated_at: string;
  _serializer: string;
}

/*语鹊文章*/
export class SourceData {
  id: number;
  slug: string;
  title: string;
  description: string;
  user_id: number;
  book_id: number;
  format: string;
  public: number;
  status: number;
  view_status: number;
  read_status: number;
  likes_count: number;
  comments_count: number;
  content_updated_at: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  first_published_at: string;
  draft_version: number;
  last_editor_id: number;
  word_count: number;
  cover: any;
  custom_description: string;
  last_editor: IYuqueUser;
  book: any;
  _serializer: string;
}
