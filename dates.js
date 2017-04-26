var moment = require('moment'); // date parsing
const NATURAL_DATE_FORMAT = 'MMMM D, YYYY';
/* erroneously, the example uses the number of seconds passed since the epoch
   instead of the number of MILLISECONDS
 */
const UNIX_DATE_FORMAT = 'X'; 

function convert(dateString) {
  var naturalDate = null;
  var unixDate = null;
  // first, assume we have got an UNIX epoch passed in
  try {
    if (isNaN(dateString)) {
      inputDate = moment(dateString, NATURAL_DATE_FORMAT);
      if (inputDate._isValid){
        naturalDate = moment(inputDate).format(NATURAL_DATE_FORMAT);
        unixDate = moment(inputDate).format(UNIX_DATE_FORMAT);
      }
    }
    else {
      var inputDate = moment(dateString, UNIX_DATE_FORMAT);
      if (inputDate._isValid) {
        unixDate = dateString;
        naturalDate = moment(inputDate).format(NATURAL_DATE_FORMAT);
      }
    }
  }
  catch (err) {}
  return {
    unix: unixDate ? +unixDate : null,
    natural: naturalDate
  };
}
module.exports = {
  convert: convert
};