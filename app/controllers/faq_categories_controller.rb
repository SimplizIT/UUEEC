class FaqCategoriesController < ApplicationController

  def index
    user = current_user
    @faqs = Faq.all
    @faq_categories = FaqCategory.all
    @tab_session = params.has_key?('format') ? params[:format] :  ['work'] # @faq_categories.first.name
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
      if params[:faq_category].has_key?('faqs_attributes')
        p 'we are were we should be now'
        faq_cat = FaqCategory.find(params[:faq_category][:id])
        p faq_cat
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
    if current_user.is?('admin') || current_user.is?('staff')
      category = FaqCategory.find(params[:faq_category][:id])

      if category

        if params.has_key?('tab')       
          session = params[:tab]
        end

        if params.has_key?('faq_move')
          faq = Faq.find(params[:faq_move])
          faq.faq_category_id = params[:faq_category][:id]

          if faq.save

            respond_to do |format|
              format.html { redirect_to faq_categories_path(session), success: 'FAQ moved' }
            end
          else

            respond_to do |format|
              format.html { redirect_to faq_categories_path, error: 'FAQ could not be moved' }
            end
          end
        else
          if category.update(faq_params)
            
            respond_to do |format|
              format.html { redirect_to faq_categories_path(session), success: 'FAQ created' }
            end
          else
           
            respond_to do |format|
              format.html { redirect_to faq_categories_path(session), error: 'FAQ created' }
            end
          end
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
      category = FaqCategory.find(params[:faq_category][:id])
      has_nested_faq_params = params[:faq_category].has_key?('faqs_attributes')
              session = params[:tab] if params.has_key?('tab')

      if has_nested_faq_params
        category.update(faq_params)
        respond_to do |format|
          format.html { redirect_to faq_categories_path(session),  success: 'FAQ deleted' }
        end
      elsif category && !has_nested_faq_params
        category.destroy
        respond_to do |format|
          format.html { redirect_to faq_categories_path(session),  success: 'FAQ deleted' }
        end
      else
        respond_to do |format|
          format.html { redirect_to faq_categories_path,  error: 'Could not be deleted code: 711' }
        end
      end
    end
  end

  private

  def faq_params
    p ')' * 80
    p 'got into the strong params'
    params.require(:faq_category).permit(:id, :name, '_destroy', faqs_attributes: [:id, '_destroy', :question, :answer])
  end
end


