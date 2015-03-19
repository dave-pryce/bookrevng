# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Review.delete_all

reviews = Review.create ([
     {starRating: 1, bookname: "Harry Potter" , desc: "It's about wizards and quiddich" , reviewedBy: "DP"},
     {starRating: 2, bookname: "Game Changer", desc: "How to gamify stuff" , reviewedBy: "AB"},
     {starRating: 4, bookname: "Workout", desc: "Cool tools and tip from the mainman Jurgen", reviewedBy: "CD"},

	])
