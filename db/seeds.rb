# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
# if Rails.env.development?

# User.create(name: 'test user', username: 'testuser', email: 'testuser@test.com', password_digest: 'testuser')

summer_70s = Collection.create(
    title: "Summer 70s",
    release_date: Date.yesterday,
    image: 'https://drive.google.com/uc?export=view&id=1_Qp91t9qb3HDzoFpHT86VVYUz5sD8pTH'
)

summer_70s.products.create(
    title: "Suede and Knit Pants",
    description: "vintage suede-front, flare pants with rib knit in the back.",
    price: 40,
    images: 'https://drive.google.com/uc?export=view&id=1CPysY9u6K2ho01xWKB-Gyai4Wy77p9IC'
)

summer_70s.products.create(
    title: "Vintage Limited Skirt",
    description: "High-waisted, linen mini skirt with matching belt. Fully lined and has center back zipper. Size is a vintage 0.",
    price: 15,
    images: 'https://drive.google.com/uc?export=view&id=1CdI31IOn5pUydzzGLcXQZjsY_VK-zdKP'
)

summer_70s.products.create(
    title: "Green Cardigan",
    description: "Boxy, green cardigan, Purl knit with single loop-closure at center.",
    price: 15,
    images: 'https://drive.google.com/uc?export=view&id=1_Qp91t9qb3HDzoFpHT86VVYUz5sD8pTH'
)

outerwear = Collection.create(
    title: "Outerwear",
    release_date: Date.yesterday,
    image: "https://drive.google.com/uc?export=view&id=1KD0PNifP0jdVss1VpneQ8JtUS-GDJ9ru"
)

outerwear.products.create(
    title: "London Fog Jacket",
    description: "Baggy, lightweight jacket. Stand collar with snaps. Men's size XL.",
    price: 20,
    images: 'https://drive.google.com/uc?export=view&id=1-MkLjVj5TGzVLGvx-dlNz2JilWPsJAn6'
)

outerwear.products.create(
    title: "Nantucket Jacket",
    description: "Lightweight, navy jacket. 100% cotton. Logo embroidery on left chest. Men's size M.",
    price: 20,
    images: 'https://drive.google.com/uc?export=view&id=1nSdst_iAGWBlbLXhlBCcB-jDl_0VqAEO'
)

outerwear.products.create(
    title: "Vintage Trench Coat",
    description: "Longline, olive green trench coat. Leather details under collar and on left panel. Matching belt around the waist and shoulder pads. Women's 10Tall",
    price: 30,
    images: 'https://drive.google.com/uc?export=view&id=1j0AZII3EGRmuvvMmVqovQGp3fm_4UybQ'
)