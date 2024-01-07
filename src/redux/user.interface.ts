interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserStreet {
  number: number;
  name: string;
}

interface UsaerLocation {
  street: UserStreet;
  country: string;
  city: string;
}

interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface UserLogin {
  uuid: string;
}

export interface UserProps {
  name: UserName;
  location: UsaerLocation;
  email: string;
  picture: UserPicture;
  login: UserLogin;
}
