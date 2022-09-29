import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  countryOptions: string[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua & Deps',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Rep',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo Democratic Rep',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Ivory Coast',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea North',
    'Korea South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'St Kitts & Nevis',
    'St Lucia',
    'Saint Vincent & the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome & Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad & Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

  levelOptions = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  goalOptions = [
    'Speak better english',
    'Improve grammar',
    'Improve listening skills',
    'All of the above',
    'Others',
  ];

  countryOptions$: Observable<string[]>;
  levelOptions$: Observable<string[]>;
  goalOptions$: Observable<string[]>;

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    country: [''],
    level: [''],
    age: [''],
    movieOpt: [''],
    goal: [''],
  });

  private _filter(value: string, collection: string[]): string[] {
    const filterValue = value.toLowerCase();

    return collection.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  constructor(private fb: FormBuilder, private email: EmailService) {
    this.countryOptions$ = this.profileForm!.get('country')!.valueChanges!.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this.countryOptions))
    );
    this.levelOptions$ = this.profileForm!.get('level')!.valueChanges!.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this.levelOptions))
    );
    this.goalOptions$ = this.profileForm!.get('goal')!.valueChanges!.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this.goalOptions))
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    const message = JSON.stringify(this.profileForm.value);
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'https://www.google.com';
    document.body.appendChild(link);
    link.click();
    link.remove();
    link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/booklet.pdf';
    link.download = 'booklet.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    // this.email.send(message).subscribe({
    //   next: (val: any) => {
    //     console.log('good', val);
    //   },
    //   error: (err: any) => {
    //     console.log('zle', err);
    //   },
    // });
  }

  get emailField() {
    return this.profileForm.get('email');
  }

  get isEmailInvalid() {
    const optionalErrors = this.emailField?.errors;
    return !!optionalErrors;
  }

  getEmailErrorMessage() {
    if (this.emailField?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailField?.hasError('email') ? 'Not a valid email' : '';
  }
}
