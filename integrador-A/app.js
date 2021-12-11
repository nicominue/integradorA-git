const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {array}
 */
function getCountryNameByIso3(isoCode){
    return countries.filter(country => country.iso3 === isoCode);
   }

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){
    const country = getCountryNameByIso3(isoCode);
    country[0].summary = {
        name: country[0].name,
        iso3: country[0].iso3,
        iso2:country[0].iso2,
        phone_code: country[0].phone_code,
        capital: country[0].capital,
        currency: country[0].currency,
        tld: country[0].tld,
        region: country[0].region,
        emoji: country[0].emoji,
    }
    return country[0].summary;
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('ARG'),
        '\n');

}

main();