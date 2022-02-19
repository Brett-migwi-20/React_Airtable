
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyWTZlAthmnKaFuE'
});
var base = Airtable.base('appfY8vBPSoqH1wRI');
var table = base("projects")


export default table
