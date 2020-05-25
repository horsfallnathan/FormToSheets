const { GoogleSpreadsheet } = require("google-spreadsheet");

const company = process.env.COMPANY;
const doc = new GoogleSpreadsheet(process.env[`${company}_SHEET_ID`]);

async function authenticate() {
  await doc
    .useServiceAccountAuth({
      client_email: process.env[`${company}_EMAIL`],
      private_key: process.env[`${company}_KEY`],
    })
    .catch((err) => console.log(err));
}

const updateSheet = async (formResponse) => {
  await authenticate();
  await doc.loadInfo();
  const sheet = doc.sheetsById[0];
  return sheet.addRow(formResponse);
};

module.exports = { updateSheet };
