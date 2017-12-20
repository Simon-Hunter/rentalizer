import {Component, OnInit} from "@angular/core";
import {IProperty} from "./property";


@Component ({
  selector: 'rent-properties',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {

  pageTitle: string = "Properties Listing";
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: number;
  get listFilter(): number {
    return this._listFilter;
  }

  set listFilter(value: number) {
    this._listFilter = value;
    this.filteredProperties = this.listFilter ? this.performFilter(this.listFilter) : this.properties;
  }

  filteredProperties: IProperty[];

  properties: IProperty [] = [
    {
      "propertyId": 1,
      "propertyDesc": "1 Bed Flat, Viewforth Sqr, EH10",
      "noBedrooms": 1,
      "availableDate": "January 19, 2018",
      "description": "Second floor fully modernized 2 bedroom flat set in the highly desirable area of Polwarth, with a host of great local ameni... ",
      "rentalPrice": 940,
      "priceFreq": "per Month",
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/217456/SmallHouse-fixed.png&disposition=attachment"
    },
    {
      "propertyId": 2,
      "propertyDesc": "3 Bed Flat, Napier Rd, EH10",
      "noBedrooms": 3,
      "availableDate": "March 12, 2018",
      "description": "Second floor fully modernized 3 bedroom flat set in the highly desirable area of Merchiston, with a host of great local ameni... ",
      "rentalPrice": 450,
      "priceFreq": "per Week",
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/217456/SmallHouse-fixed.png&disposition=attachment"
    },
  ];

  constructor(){
    this.filteredProperties = this.properties;
    this.listFilter = 1;
  }

  performFilter(filterBy: number): IProperty[]{
    return this.properties.filter((property: IProperty) =>
        property.noBedrooms >= filterBy)
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
