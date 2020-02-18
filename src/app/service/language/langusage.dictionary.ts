import { Language } from 'src/app/models/language.model';


export const languages: Language[] = [
  { value: 'de-DE', viewValue: 'Deutsch' },
  { value: 'en', viewValue: 'English' },
];


export const customMessages = {
  en: {
    'greetingMessage': "Welcome on {0}",
    'Login': 'Login',
    'Help': 'Help',
    'Online-Calendar': 'Online-Calendar',
    'Submit': 'Submit',
    'Password': 'Password',
    'Passcode': 'Passcode',
    'Birthday': 'Birthday',
    'Select': 'Select',
    'privacy-validation-msg': 'Accept the privacy policy notice to continue.',
    'privacy-accept-msg': 'I have read the data protection instruction and I agree to it.',
    'privacy': 'Data protection declaration',
    'Next': 'Next',
    'Email': 'Email',
    'Phonenumber': 'Phonenumber',
    'Contact data': 'Contact data',
    'Appointment': 'Appointment',
    'Service': 'Service',
    'Location': 'Location',
    'Date': 'Date',
    'Hint': 'Hint',
    'Print': 'Print',
    'Finished': 'Finished'
  },
  de: {
    'greetingMessage': "Willkommen bei {0}",
    'Login': 'Anmelden',
    'Help': 'Hilfe',
    'Online-Calendar': 'Online-Kalender',
    'Submit': 'Absenden',
    'Password': 'Passwort',
    'Passcode': 'Schlüssel',
    'Birthday': 'Geburtstag',
    'Select': 'Auswahl',
    'privacy-validation-msg': 'Akzeptieren Sie die Datenschutzrechtliche Belehrung um fortzufahren.',
    'privacy-accept-msg': 'Ich habe die Datenschutzrechtliche Belehrung gelesen und stimme dieser zu.',
    'privacy': 'Datenschutzrechliche Erklärung',
    'Next': 'Weiter',
    'Email': 'Email',
    'Phonenumber': 'Telefonnummer',
    'Contact data': 'Kontaktdaten',
    'Appointment': 'Terminvereinbarung',
    'Service': 'Dienstleistung',
    'Location': 'Standort',
    'Date': 'Datum',
    'Hint': 'Hinweis',
    'Print': 'Drucken',
    'Finished': 'Fertig'
  }
}