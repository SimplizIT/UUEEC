class BlogsController < ApplicationController
  def index
    @blogs = Blog.order(created_at: :desc).page(params[:page]).per(5)
    @links = Link.order(created_at: :desc)
    @events = Event.where(['start > ?', Date.today]).limit(4)
    p '4:' * 40
    p @events
  end

  def new
    @blog = Blog.new
  end

  def create
    if current_user
      @blog = current_user.blogs.new(blog_params)
      if @blog.save
        flash[:success] = 'blog created'
        redirect_to blog_path(@blog)
      else
        flash[:error] = 'failed to create blog'
        redirect_to new_blog_path
      end
    else
      flash[:error] = 'You must be signed in'
      redirect_to blogs_path
    end
  end

  def show
    @blog = Blog.find(params[:id])
    if @blog.increment(:views).save
    else
      flash[:error] = 'failed to load blog'
      redirect_to blogs_path
    end
  end

  def update
  end

  def destroy
  end

  private

  def blog_params
    params.require(:blog).permit!
  end
end