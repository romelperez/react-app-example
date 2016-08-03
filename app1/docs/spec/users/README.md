# Users

- If user is logged in:
  - If user is admin:
    - Should display a link to [CMS](../cms/)
  - Should display current user name
    - On click, **Edit User**
  - Should display list of all brands of cars.
    - Each item
      - Should display: name, picture, number of cars
      - On click, display **Brand Details**
- If user is not logged in:
  - Redirect to [login](./login.md) with redirect to here.

## Brand Details

- Should display: name, picture, description
- Should display a list of all cars
  - Each item
    - Should display: name, picture, price
    - On click, display **Car Details**
- Should have links to: **Return**

## Car Details

- Should display: name, picture, description, price, units available
- Should have option available to **Buy** only if the car has units available
- Should have links to: **Return**, **Brand Details**

## Edit User

- Should allow edit [user data](../data/user.md)
- Should be links to: **Return**
- On change, save

## Buy

- Should require user to input credit card data to validate purchase
- Should have option to buy
- Should have link to: **Return**
- On error, display error message
- On success, display success message
