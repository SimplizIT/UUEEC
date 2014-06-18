class FaqsController < ApplicationController
  # def index
  #   @faqs = Faq.all
  #   @faq = Faq.new
  # end

  # def new
  # end

  # def create
  #   if current_user.is?('admin') || current_user.is?('staff')
  #     if Faq.create(faq_params)
  #       respond_to do |format|
  #         format.html { redirect_to faqs_path,  success: 'FAQ created' }
  #       end
  #     else
  #       respond_to do |format|
  #         format.html { redirect_to faqs_path,  error: 'FAQ could not be created at this time.' }
  #       end
  #     end
  #   else
  #     flash[:error] = 'Not authorized for this action'
  #     redirect_to faqs_path
  #   end
  # end

  # def update
  # end

  # def destroy
  #   if current_user.is?('admin') || current_user.is?('staff')
  #     if Faq.find(params[:id]).delete
  #       respond_to do |format|
  #         format.html { redirect_to faqs_path,  success: 'FAQ deleted' }
  #       end
  #     else
  #       respond_to do |format|
  #         format.html { redirect_to faqs_path,  error: 'FAQ could not be deleted.' }
  #       end
  #     end
  #   end
  # end

  # private

  # def faq_params
  #   params.require(:faq).permit(:question, :answer)
  # end
end
