import { Book } from './book';

export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  books?: Book[];
};

