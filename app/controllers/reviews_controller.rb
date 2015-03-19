class ReviewsController < ApplicationController
  # GET /reviews
  # GET /reviews.json
  def index
    @reviews = Review.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @reviews }
    end
  end

  # GET /reviews/1
  # GET /reviews/1.json
  def show

  end

  # GET /reviews/new
  # GET /reviews/new.json
  #def new
  #  @review = Review.new
  #end


  # GET /reviews/1/edit
  def edit
    
  end

  # POST /reviews
  # POST /reviews.json
      def create
          @review = Review.new(review_params)

        respond_to do |format|
          if @review.save
            format.html { redirect_to @review, notice: 'Review successfully created.' }
            format.json { render json: @reviews }
          else
            format.html { render :new }
            format.json { render json: @review.errors, status: :unprocessable_entity }
          end
        end
      end
  


 
     def review_params
     params.require(:review).permit(:starRating, :bookname, :desc, :reviewedBy)
     end

    
  

  # PUT /reviews/1
  # PUT /reviews/1.json
  def update
    @review = Review.find(params[:id])

    respond_to do |format|
      if @review.update_attributes(params[:review])
        format.html { redirect_to @review, notice: 'Review was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reviews/1
  # DELETE /reviews/1.json
  def destroy
    @review = Review.find(params[:id])
    @review.destroy

    respond_to do |format|
      format.html { redirect_to reviews_url }
      format.json { head :no_content }
    end
  end


end

