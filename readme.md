# ElectricityTopupTricks

`Create a web app, to help your local Municipality to track electricity usage per household. Each month the Municipality gives each household 50 units each for free. Households can topup if they need extra electricity.

The factory function is missing some methods and queries. Please sort that out.

Ensure to deploy you application to Travis ans Heroku.

As you use appliances, your units will drop accordingly.


Your factory function should have the following methods:

Function name            | Description
------------------------ | ---------------
`streets`        |   List all the streets that we have records
`streetMeters`       |  for a given street show all the meters and their balances
`applianceRates`             |  List all appliances and their rates
`topupElectricity`       |  buy electricity for a given `meterId` and `units`
`meterData`      |  For a given meterId, list all the data for it
`useElectricity`   |  allow a house to use electricity - use `meterId` and `units`

## Database setup

Create a database called `topups_db` in postgresql. Set it up so that your application can use it.

Please use the `sql/table.sql` script to create your tables and the `sql/insert.sql` to insert your data into your database.

**NOTE:** - We have already created tables and data for you. You don't need to create any other tables.

## Screens to create

Route name |Route type| Route description |
-----|---------|
`/appliances` | GET | Show all the appliances and their respective electricity usage rates.
`/streets` | GET | Show a list of all the streets|
`/meter/:street_id` | GET | Show a list of all the meters in a given street.|
`/meter/use/:meter_id`| GET & POST | Create a screen where households can use electricity. Using electricity should decrease the balance in the table for the appropriate table. The users can select the appliance type for which electricity is used from a dropdown.
`/meter/use/:meter_id`| GET & POST | Create a screen where households can buy electricity. Buying electricity should increase the balance in the table for the appropriate table.

The routes that meets the `meter_id` can be linked to from the `/meter/:street_id` screen.

## Unit Testing

Create some using tests in `/test/electricity-meters.test.js` file.

Creat some Unit test that is testing the Factory Function `electricity-meters.js`:

* the correct number of streets are returned,
* the correct number of appliances are returned,
* if electricity is used the balance for the given meter is going down correctly,
* if electricity is bought that the balance for the given meter is going up correctly.

# Deployment

Create Travis deploy and add a Travis badge to your link.
Deploy your application to Heroku
