# Week12

### Challenge #1: Customer View

Video link:  https://marijar84.github.io/Week12/Challenge_1_and_2/Challenge_1-2018-05-17_14.52.39.mp4

The app should then prompt users with two messages.
   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

Once the customer has placed the order, your application should check if your store has enough of the product to meet the 
customer's request.
   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   
   
   
### Challenge #2: Manager View

Video link: https://marijar84.github.io/Week12/Challenge_1_and_2/Challenge_2-2018-05-17_15.19.40.mp4

* Show list of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
  
  

### Challenge #3: Supervisor View

Video link: https://marijar84.github.io/Week12/Challenge_3/Challenge_3-2018-05-17_17.16.35.mp4

This application will list a set of menu options:

   * View Product Sales by Department
   
   * Create New Department

When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their 
terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`.
`total_profit` should not be stored in any database. You should use a custom alias.

If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to 
the `departments` table.
