class FaqCategoriesController < ApplicationController

  def index
    user = current_user
    @faqs = Faq.all
    @faq_cats = FaqCategory.all
    if user
      @faq_category = user.faq_categories.build
      @faq = @faq_category.faqs.build
    end
  end

  def new
  end

  def create
    p '$' * 90
    p params
    p params[:faq]
    p params[:faq][:faq_category]
    if current_user.is?('admin') || current_user.is?('staff')
      if params.has_key?('faq')
        faq_cat = FaqCategory.find_by_name(params[:faq][:faq_category])
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
    params.require(:faq_category).permit(:name, faq: [:id, '_destroy', :question, :answer])
  end
end


