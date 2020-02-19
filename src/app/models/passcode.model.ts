import { User } from './user.model';

export interface Passcode {
  passcode?: string;
  birthday?: Date;
}

export interface PasscodeResponse {
  user: User
}