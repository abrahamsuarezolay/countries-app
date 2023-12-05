import { Country } from './../../interfaces/country';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {


  public urlApi = "https://restcountries.com/v3.1/alpha";

  @Input()
  public countries: Country[] = []

}
