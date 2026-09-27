# Eventara Function Planner

A simple React + Vite event-planning platform for Tamil Nadu functions.

## Customer flow
1. Create an account or sign in.
2. Select an occasion such as Marriage, Birthday, Engagement, Baby Shower, Housewarming, Corporate Event or Anniversary.
3. Browse multiple companies under every service category.
4. Choose venues/mandapams, caterers, decorators, photographers, entertainment teams, makeup artists, invitation providers and return-gift companies.
5. Add selected companies to the cart.
6. Enter date, location, guest count, budget and special requirements.
7. Submit one enquiry.
8. Track submitted enquiries under **My Requests**.
9. Use the existing **AI Planner** for a quick budget estimate.

## Admin flow
- Dashboard with enquiry, customer and company counts.
- Enquiries page with customer contact details, requirements, selected companies and status updates.
- Customers page.
- **Companies** page where the admin can add, edit, hide/show and delete service companies.
- All demo data is stored in browser `localStorage`.

## Admin login
- Email: `admin@eventara.com`
- Password: `admin123`

## Demo customer
- Email: `customer@eventara.com`
- Password: `customer123`

## Run
```bash
npm install
npm run dev
```

The project keeps the existing Eventara visual direction and uses the existing project images. It is intentionally frontend/localStorage based for demo/project presentation; a production deployment should replace localStorage authentication/data with a secure backend and database.
