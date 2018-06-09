PokemonApp

How to run 
---npm install
---ng serve --prod

Technical choices

Angular 5 Angular CLI
Angular material

Architecture 

app-routing.module.ts - Just router, nothing special.
material.module.ts - I created this module to avoid clogging app.module

App has 4 components 

list.component - The component contains a general list of Pokemon, for the general list I have used ngx-infinity-scroll for the pagination. 
Also this component contains list of chosen pokemons and search input. I tried to do a autocomplete search, but unfortunately the API does not
support this.

card.component - Component for display details of pokemon

compare.component - Component for comparing Pokemons

App has 2 services

communication.service - Service for communicating with api, in this service i inject App.config. App.config use for store apiEndpoint.
compare.service - Service where store and managing data for comparing.

How to use 

When app is runing, just add pokemons from list in right side of page, after that click "compare" button in card, then go to compare page and compare pokes.
