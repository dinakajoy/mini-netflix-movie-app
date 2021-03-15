export default interface IMovie {
  objectId: string;
  title: string;
  image: [
    {'name': string},
    {'url': string}
  ];
  genre: any[];
  description: string;
  releaseYear: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
};