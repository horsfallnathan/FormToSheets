## Contact Form to Google Sheets

> This application enables you take input from a website contact form and saves to a google sheets document.
> Backend validation is done with yup, the schema replicates what is existent at the front end.
> I also included google's recaptcha v3 

#### Requirements

- You need to create an application in [Google Developers Console](https://console.developers.google.com)
- Setup a service account and obtain email and private key (comes as a json file)
- Obtain a recaptcha key for your website host (localhost works also). You can do this [here](https://www.google.com/recaptcha/intro/v3.html)
- Make a .env file and save details in this format: 
  ``` BASH
  APP_PORT=CUSTOM PORT #Defaults to 4200
  APP_HOST=CUSTOM HOST #Defaults to localhost
  COMPANY_KEY="-----BEGIN PRIVATE KEY-----\PRIVATE KEY CONTENT\n-----END PRIVATE KEY-----\n"
  COMPANY_EMAIL=YOUR SERVICE ACCOUNT EMAIL
  COMPANY_SHEET_ID=YOUR SHEET ID
  ```

### Major Dependency : Google Spreadsheet package
- To do more than adding rows, check out the documentation from the [google spreadsheet](https://www.npmjs.com/package/google-spreadsheet) package on npm.

>That's all! Extend as you please.