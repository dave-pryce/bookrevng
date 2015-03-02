class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :starRating
      t.string :desc
      t.string :reviewedBy

      t.timestamps
    end
  end
end
