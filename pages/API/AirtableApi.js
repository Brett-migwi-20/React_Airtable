
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
});
var base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);
var table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME)

export default table
