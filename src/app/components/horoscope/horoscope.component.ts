import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../../services/horoscope.service';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css'],
})
export class HoroscopeComponent implements OnInit {
  signoSeleccionado: string;
  diaSeleccionado: string;
  description!: string;
  date_range!: string;
  current_date!: string;
  color!: string;
  signos: any[] = [
    { value: 'aquarius', nombre: 'Aquarius' },
    { value: 'aries', nombre: 'Aries' },
    { value: 'taurus', nombre: 'Taurus' },
    { value: 'gemini', nombre: 'Gemini' },
    { value: 'cancer', nombre: 'Leo' },
    { value: 'virgo', nombre: 'Aries' },
    { value: 'libra', nombre: 'Libra' },
    { value: 'scorpio', nombre: 'Scorpio' },
    { value: 'sagittarius', nombre: 'Sagittarius' },
    { value: 'Capricorn', nombre: 'Capricorn' },
    { value: 'pisces', nombre: 'Pisces' },
  ];
  dias: any[] = [
    { value: 'today', nombre: 'Today' },
    { value: 'yesterday', nombre: 'Yesterday' },
    { value: 'tomorrow', nombre: 'Tomorrow' },
  ];

  constructor(private horoscopeService: HoroscopeService) {}

  ngOnInit() {}

  buscarHoroscope() {
    //console.log(this.signoSeleccionado);
    // console.log(this.diaSeleccionado);
    this.horoscopeService
      .getHoroscope(this.signoSeleccionado, this.diaSeleccionado)
      .subscribe(
        (result) => {
          console.log(result);
          this.description = result.description;
          this.date_range = result.date_range;
          this.current_date = result.current_date;
          this.color = result.color;
        },

        (error) => {
          alert('Error en la petición');
        }
      );
  }
}
