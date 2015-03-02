class Review < ActiveRecord::Base
  attr_accessible :desc, :reviewedBy, :starRating
end
