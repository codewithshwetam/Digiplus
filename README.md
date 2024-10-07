#install packages for running this
npm init-y
npm i express
npm i ejs
Then run the code in terminal: node app.js
Database Schema
The database schema used in this project is as follows:

Table Name: SIM_Cards
SIM_Number (VARCHAR, Primary Key): Unique identifier for each SIM card.
Phone_Number (VARCHAR): Phone number associated with the SIM card.
Status (VARCHAR): Activation status of the SIM card (active, inactive).
Activation_Date (TIMESTAMP): Date and time when the SIM card was activated.
API Endpoints
1. Activate SIM Card
URL: /activate
Method: POST
Request Body:
json

{
  "SIM_Number": "1234567890"
}
Response:
json

{
  "message": "SIM card activated successfully",
  "activation_date": "2024-10-07T12:00:00Z"
}
2. Deactivate SIM Card
URL: /deactivate
Method: POST
Request Body:
json

{
  "SIM_Number": "1234567890"
}
Response:
json

{
  "message": "SIM card deactivated successfully"
}
3. Get SIM Details
URL: /sim-details/{SIM_Number}
Method: GET
Response:
json

{
  "SIM_Number": "1234567890",
  "Phone_Number": "+1234567890",
  "Status": "active",
  "Activation_Date": "2024-10-07T12:00:00Z"
}
