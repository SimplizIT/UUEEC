class FaqCategoriesController < ApplicationController

  def index
    user = current_user
    @faqs = Faq.all
    @faq_categories = FaqCategory.all
    if user
      @faq_category = user.faq_categories.build
      @faq = Faq.new
    end
  end

  def new
  end

  def create
    p '$' * 90
    p params
   
    if current_user.is?('admin') || current_user.is?('staff')
      p 'Yessssssssssssssss to stafffffffffffffffffffffffffff'
      if params.has_key?('faqs')
        faq_cat = FaqCategory.find_by_name(params[:faqs][:faq_category])
        faq_cat.update!(faq_params)
        respond_to do |format|
            format.html { redirect_to faq_categories_path,  success: 'FAQ created' }
          end        
      else
        if FaqCategory.create(faq_params)
          respond_to do |format|
            format.html { redirect_to faq_categories_path,  success: 'FAQ Category created' }
          end
        else
          respond_to do |format|
            format.html { redirect_to faq_categories_path,  error: 'FAQ could not be created at this time.' }
          end
        end
      end
    else
      flash[:error] = 'Not authorized for this action'
      redirect_to faq_categories_path
    end
  end

  def update
    p 'well hello thererrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'
    if current_user.is?('admin') || current_user.is?('staff')
      category = FaqCategory.find(params[:faq_category][:id])
      if true
        category.update_attributes(faq_params)
         respond_to do |format|
            format.html { redirect_to faq_categories_path,  success: 'FAQ created' }
          end
      else 
        respond_to do |format|
            format.html { redirect_to faq_categories_path,  error: 'FAQ could not be created at this time.' }
          end
      end
    end
  end










  def destroy
    if current_user.is?('admin') || current_user.is?('staff')
      if Faq.find(params[:id]).delete
        respond_to do |format|
          format.html { redirect_to faq_categories_path,  success: 'FAQ deleted' }
        end
      else
        respond_to do |format|
          format.html { redirect_to faq_categories_path,  error: 'FAQ could not be deleted.' }
        end
      end
    end
  end

  private

  def faq_params
    p ')' * 80
    p 'got into the strong params'
    params.require(:faq_category).permit(:id, :name, faqs_attributes: [:id, '_destroy', :question, :answer])
  end
end


