# Quepon
A coupon auto-filling application

# Disclaimer
This project is being actively developed

# Contribution
Feel free to email me with any questions or open an issue

# Extension
A chrome extension with content methods for detecting and flood filling coupon inputs.
This will eventually interface with the api, storing custom user coupon books.

# Api 
An api for storing coupon data, with the intension of providing quick lookups for extensions
seeking to fill relevant coupons.

# Project Summary
My overall approach in designing the extension was to take advantage of chrome and mozilla's apis
for performing dom referncing and mutation.  As security is a big risk in this area, I decided 
to use an enumerator to send various signals accross components to reduce the amount of real
data being transmitted.  This allowed me to encode and transmit volition, while localizing computations.
I plan on using axios for interfacing with my api as it is more secure than the native node-fetch api.
I chose postgres for my database, as I wasn't sure exactly how my data was going to be modeled and I'm not averse to refactoring schemas and rerunning migrations.  I thought sql to be important in that I had originally thought more user data was going to be stored server side and inner joins of coupon data would be necessary, as opposed to being hosted by WooCommerce.  Regardless, I feel that Postgres is a versatile and strong database for most projects.
As far as frameworks are concerned, I used express and typeorm on the backend and react on the frontend.
I additionally used typescript with webpack on both repos for (atleast some) type safety and data validation.
One issue I struggled with was in fully filtering dom nodes in an attempt to pin the discount and total price elements.
If I had more time I would spend some of it better researching how to achieve this with a combination of regex and
css query selectors.  The issue of a generic function that will work accross a good number of websites persists, but
I think finding a decent solution should not be too challenging.  I still need to complete the flood filling and price comparison methods, neither of which will be particullarly challenging -- again the difficult part is in pinning the elems.  I also need to do a rewrite of the api to better model extension data and allow for admin monitoring, logging, and better validation.  I will also need to wire the front end into the backend.  Overall I really enjoyed the project.  I've been working heavily on parsers and asts in the past month and a half, so this was a big change of pace and I had a great time.  I would certainly like to continue working on the project; I'm unsure if this is meant to be a production application, but if so I'd love to keep working on it.  I think this project seemed much more fair and attainable when I started, but I'm now in the position of having realized its complexity.  That said, I know how to complete the project, though I don't think I would have been able to have fully completed it in 7 days even if I had a clear schedule.  It was certainly very challenging though and I love challenging projects, so I believe it was great as an intermediate project. 
