# Projekt DT208G

Projektet i Moment 5 är skapad i Angular.

## Länk till webbplats
[https://framtidensuniversitet.netlify.app]

## Innehåll

Uppgiften går ut på att skapa en  webbplats för ett fiktivt Universitet som hämtar kurs API från Mittuniversitet som extern länk och presenteras i en tabell på sidan. Det är både möjligt att sortera datan samt filtrera utifrån sökfras. Det är även möjligt för användare att lägga till kurser via localstorage och skapa sitt eget kurschema utifrån valda kurser.

### HTTP Client
För att göra anrop till kurs APIet används HTTP client i en skapad service för course i Angular. 

Kursdata API hämtas från följande länk:
[Kursdata Mittuniversitet](https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json)

### Komponenter
Innehållet på sidorna har skapats i komponenter för coursePage samt courseSchema.

### Bindings
Datan som skrivs ut på sidorna använder olika typer av bindings, Text interpolation, event binding och two way binding.

### Services
All hämtning av kursdata och funktionalitet görs i flera services.

### Interface
Definiering av kursdata görs i Interface för course.

### Paginering
Uppdelning av kurser på respektive sida har skapats med hjälp av pagination i Angular Material.
