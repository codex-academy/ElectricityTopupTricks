# ElectricityTopupTricks

`Create a web app, to help your local Municipality to track electricity usage per household. Each month the Municipality gives each household's 50 units each for free. Households can topup if they need extra electricity.
As you use appliances, your units will drop accordingly.
If the `units` per household is equal or below 30, add a class `warning` into your current units.
In your app you must have the following Functions.
Function name            | Description
------------------------ | ---------------
`streets`        |   List all the streets that we have records
`streetMeters`       |  for a given street show all the meters and their balances
`applianceRates`             |  List all appliances and their rates
`topupElectricity`       |  buy electricity for a given `meterId` and `units`
`meterData`      |  For a given meterId, list all the data for it
`useElectricity`   |  allow a house to use electricity - use `meterId` and `units`
## Database setup
Please use the prepopulated inside `sql/table.sql` to create your tables and `sql/insert.sql` to insert your data.
`NOTE - We have already created table and data for you.`

## Screens to create
- Create a screen that will able the household to buy electricity. 
- Create a screen for household to be able to use electricity. 
- Show all the appliances and their rates

## What you need 

