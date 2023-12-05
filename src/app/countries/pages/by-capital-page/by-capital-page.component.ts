import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[] = []

  constructor (private countriesService: CountriesService) {}

  searchByCapital = (value: string) => {
    this.countriesService.searchCapital(value)
    .subscribe( countries => {
      this.countries = countries
    }
    )
  }
}
