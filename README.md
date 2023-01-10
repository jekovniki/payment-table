<h1 align="center">Payment table</h1>
<p align="center">
  A single page application. That presents a sortable table with expanding data on new pages.
</p>

# Run the application
```bash
# Clone this repository
$ git clone https://github.com/jekovniki/payment-table.git

# Go into the repository
$ cd payment-table

# Run the payment-table
$ npm install
$ npm build
$ npm run start
```

The application is now running on port 3000;

# Task requirement
<h3>Table</h3>
<ul>
    <li>The table must be sortable only by status, created_at, merchant_name, type, error_class, card_holder, card_number and amount fields.</li>
    <li>All dates must be displayed in a specific format: yy-mm-dd HH MM (Example: 17-07-26 07 11).</li>
    <li>Transaction types like SaleTransaction, Sale3dTransaction, AuthorizeTransaction must be displayed as Sale, Sale3d, Authorize.</li>
    <li>error_class must be filtered to show only System, Remote or Unknown instead of the entire class name</li>
    <li>amount must be visualized as 'amount + currency' (example: 0.50 USD). Note that in the date.json the value for the amount is 50. You must convert that value properly before visualized.</li>
</ul>
<h3>Show page</h3>
<p>All transactions must have Show Page</p>
<ul>
    <li>The created_at table field must be a link to the show page</li>
    <li>Error messages must be visible only at the Show page of the transaction</li>
    <li>The full error class must be visible on the show page</li>
</ul>
<h3>Search Filter area</h3>
<p>Above the Table from 1. there must be search area</p>
<ul>
    <li>Should be able to search transactions by date range (from, to) including hours and minutes.</li>
    <li>Must have drop-down with all table columns(without created_at) named Filters</li>
    <li>When a user selects a value from the drop-down new filter must appear. The new filter contains two fields, one drop-down named 'match by'(with values: equal, starts with, ends with, contains) and one text input with label 'value'. In the new filter, the user must be able to search for a value entered in the text input using the matching type selected from the filter's drop-down. There must be button near the new filter to remove it</li>
    <li>The user must be able to add filter for all values(table columns) in the Filters drop-down</li>
</ul>
<h3>Unit tests</h3>
<h3>Documentation</h3>