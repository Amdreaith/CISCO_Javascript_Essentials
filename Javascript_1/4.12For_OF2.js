let university = [
    { name : "NU", population : 1000, location : "NY" },
    {name : "FEU" , population : 2000, location : "Manila" },
    {name : "ADMU" , population : 3000, location : "Quezon City" },
    {name : "UST" , population : 4000, location : "Manila" },
    {name : "UP" , population : 5000, location : "Quezon City" },
    {name : "Ateneo" , population : 6000, location : "Quezon City" },
    {name : "San Beda" , population : 7000, location : "Manila" },
    {name : "San Sebastian" , population : 8000, location : "Manila" },
    {name : "Lyceum" , population : 9000, location : "Manila" },
    {name : "Mapua" , population : 10000, location : "Manila" },
];

for (let location of university) {
   if (location.population > 5000) {
    console.log(`${location.name} is located in ${location.location} and has a population of ${location.population}.`);
   }
}