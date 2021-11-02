export interface CytokeratinModel {
  nav: Nav;
  posters: Posters;
  purchase: Purchase;
}

export interface Nav {
  titleOne: string;
  titleSpan: string;
  titleTwo: string;
}
// img: cover
export interface Posters {
  postersBaseOne: PostersBase;
  postersBaseTwo: PostersBase;
  postersBaseThree: PostersBase;
  postersBaseFour: PostersBase;
  postersBaseFive: PostersBase;
  postersBaseSix: PostersBase;
  postersBaseSeven: PostersBase;
  postersBaseEight: PostersBase;
  postersBaseNine: PostersBase;
  postersBaseTen: PostersBase;
  postersBaseEleven: PostersBase;
  postersBaseTwelve: PostersBase;
}

export interface Purchase {
  title: string;
  img: Img;
  button: string;
}
// button event click
export interface Img {
  src: string;
  alt: string;
}

export interface PostersBase {
  img: Img[];
  title: string;
  button: string;
  price: string;
}
