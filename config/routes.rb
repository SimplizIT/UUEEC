Uueec::Application.routes.draw do

  resources :faq_categories, only: [:index, :create, :new, :destroy, :update]
  resources :blogs, only: [:index, :create, :new, :destroy, :update, :show]
  resources :bugs
  resources :obligations
  resources :programs, only: [:index, :create, :new, :update, :show]

  get "roles/index"
  put "roles/update"
  get "welcome/staff"

  resources :visitors, only: [:create]

  resources :events, only: [:index, :create, :new, :destroy]
  resources :user, only: [:index, :update, :destroy]
  # get "user/index"
  # put "user/update"
  devise_for :users, :controllers => { :registrations => "registrations" }

  resources :blogs do
    get 'page/:page', :action => :index, :on => :collection
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
