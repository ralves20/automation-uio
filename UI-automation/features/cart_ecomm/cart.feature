Feature: Cart
    As a Ecommerce user
    Rodrigo wants to add products into the cart on the Ecommerce
    So he can buy the products that he wants

  Scenario: Adds a product into the cart
    Given that Rodrigo is properly authenticated in the Sauce Demo ecommerce
    And he adds the product Sauce Labs Bolt T-Shirt into the cart
    When he concludes the checkout after filling all the information properly
    Then he should see the page with the checkout completion
