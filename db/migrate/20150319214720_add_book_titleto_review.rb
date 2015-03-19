class AddBookTitletoReview < ActiveRecord::Migration
  def change
  	  add_column :reviews, :bookname, :string
  end
end
