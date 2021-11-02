import { Component, OnInit } from '@angular/core';
// MODEL INTERFACE
import { CytokeratinModel } from './models/cytokeratin-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public cytoData: CytokeratinModel;
  public inputPurchaseData: string = '';
  constructor() {
    this.cytoData = {
      nav: {
        titleOne: 'Cytokeratin',
        titleSpan: '||',
        titleTwo: 'Scientific posters',
      },

      posters: {
        postersBaseOne: {
          img: [
            {
              src: '../../assets/Poster1.jpeg',
              alt: 'Poster 1',
            },
          ],
          title: 'Poster 1',
          button: 'Show prices',
          price: '9,99€',
        },
        postersBaseTwo: {
          img: [
            {
              src: '../../assets/Poster2.jpeg',
              alt: 'Poster 2',
            },
          ],
          title: 'Poster 2',
          button: 'Show price',
          price: '10,99€',
        },
        postersBaseThree: {
          img: [
            {
              src: '../../assets/Poster3.jpeg',
              alt: 'Poster 3',
            },
          ],
          title: 'Poster 3',
          button: 'Show price',
          price: '12,99€',
        },
        postersBaseFour: {
          img: [
            {
              src: '../../assets/Poster4.jpeg',
              alt: 'Poster 4',
            },
          ],
          title: 'Poster 4',
          button: 'Show price',
          price: '12,99€',
        },
        postersBaseFive: {
          img: [
            {
              src: '../../assets/Poster5.jpeg',
              alt: 'Poster 5',
            },
          ],
          title: 'Poster 5',
          button: 'Show price',
          price: '9,99€',
        },
        postersBaseSix: {
          img: [
            {
              src: '../../assets/Poster6.jpeg',
              alt: 'Poster 6',
            },
          ],
          title: 'Poster 6',
          button: 'Show price',
          price: '10,99€',
        },
        postersBaseSeven: {
          img: [
            {
              src: '../../assets/Poster7.jpeg',
              alt: 'Poster 7',
            },
          ],
          title: 'Poster 7',
          button: 'Show price',
          price: '14,99€',
        },
        postersBaseEight: {
          img: [
            {
              src: '../../assets/Poster8.jpeg',
              alt: 'Poster 8',
            },
          ],
          title: 'Poster 8',
          button: 'Show price',
          price: '12,99€',
        },
        postersBaseNine: {
          img: [
            {
              src: '../../assets/Poster9.jpeg',
              alt: 'Poster 9',
            },
          ],
          title: 'Poster 9',
          button: 'Show price',
          price: '9,99€',
        },
        postersBaseTen: {
          img: [
            {
              src: '../../assets/Poster10.jpeg',
              alt: 'Poster 10',
            },
          ],
          title: 'Poster 10',
          button: 'Show price',
          price: '9,99€',
        },
        postersBaseEleven: {
          img: [
            {
              src: '../../assets/Poster11.jpeg',
              alt: 'Poster 11',
            },
          ],
          title: 'Poster 11',
          button: 'Show price',
          price: '10,99€',
        },
        postersBaseTwelve: {
          img: [
            {
              src: '../../assets/Poster12.jpeg',
              alt: 'Poster 12',
            },
          ],
          title: 'Poster 12',
          button: 'Show price',
          price: '12,99€',
        },
      },

      purchase: {
        title: 'Did you like some poster? Now FREE SHIPPING in 24 - 48h!!!',
        img: {
          src: '../../assets/Formulario.jpeg',
          alt: 'Formulario',
        },
        button: 'Comprar',
      },
    };
  }

  ngOnInit(): void {}

  setMessage(event: string) {
    this.inputPurchaseData = event;
  }
}
