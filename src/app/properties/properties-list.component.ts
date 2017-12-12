import {Component} from "@angular/core";

@Component ({
  selector: 'rent-properties',
  templateUrl: './properties-list.component.html'
})
export class PropertiesListComponent {
  pageTitle: string = "Properties Listing";
  imageWidth: number = 100;
  imageMargin: number = 2;
  properties: any [] = [
    {
      "propertyId": 1,
      "propertyDesc": "1 Bed Flat, Viewforth Sqr, EH10",
      "noBedrooms": "1",
      "availableDate": "January 19, 2018",
      "description": "Second floor fully modernized 2 bedroom flat set in the highly desirable area of Polwarth, with a host of great local ameni... ",
      "rentalPrice": 940,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/217456/SmallHouse-fixed.png&disposition=attachment"
    },
    {
      "propertyId": 2,
      "propertyDesc": "3 Bed Flat, Napier Rd, EH10",
      "noBedrooms": "3",
      "availableDate": "March 12, 2018",
      "description": "Second floor fully modernized 3 bedroom flat set in the highly desirable area of Merchiston, with a host of great local ameni... ",
      "rentalPrice": 1250,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/217456/SmallHouse-fixed.png&disposition=attachment"
    },
  ];
}
