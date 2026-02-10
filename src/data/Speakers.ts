// {
//   id: 1,
//   lastName: "LastName",
//   name: "FirstName",
//   role: "Keynote Speaker",
//   image: "path/to/img",
// },

export interface Speaker {
  id?: number;
  lastName: string;
  name: string;
  role: string;
  image: string;
}

export const SPEAKERS_DATA: Speaker[] = [];
