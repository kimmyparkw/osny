# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
# if Rails.env.development?

academia = Collection.create(
    title: "Academia",
    release_date: Date.today
)

academia.products.create(
    title: "Vintage Polo Cardigan Vest",
    description: "cream, cable knit cardigan vest with Polo logo on left side.",
    price: 20
)

academia.products.create(
    title: "Leather Bag",
    description: "sturdy, brown leather bag with 2 main compartments and small front pocket.",
    price: 20
)

academia.products.create(
    title: "Vintage Blouse",
    description: "White button-up blouse with covered buttons and notched collar.",
    price: 10
)

summer_70s = Collection.create(
    title: "Summer 70s",
    release_date: Date.yesterday
)

summer_70s.products.create(
    title: "Suede and Knit Pants",
    description: "vintage suede-front, flare pants with rib knit in the back.",
    price: 40
)

summer_70s.products.create(
    title: "Casual Corner Cardigan",
    description: "longline, camel-colored cardigan with belt for the waist. Rib-knit and long-sleeved.",
    price: 15
)