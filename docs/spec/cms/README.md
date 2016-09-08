[Back](../)

# CMS

- If user is logged in AND is admin:
  - Should be the company logo with link to default view
  - Should be a menu with links to:
    - [Purchases view](./purchases.md)
    - [Cars view](./cars.md)
    - [Brands view](./brands.md)
    - [Information view](./info.md)
    - [Users view](./users.md)
    - [Users Cars](../users/cars.md)
    - [Logout](../users/logout.md)
  - Should display [Purchases view](./purchases.md) by default
  - Should display current view
    - On click, should reset current view
  - Should display current user
    - On click, should display [Users view](./users.md) with the current user edition
  - Should be a main section to display the views
  - Should be a footer with info about the company
- If user is logged in but no admin:
  - Should display forbidden message
- If no admin user is logged in:
  - Redirect to [Login](../users/login.md) with redirect to CMS
