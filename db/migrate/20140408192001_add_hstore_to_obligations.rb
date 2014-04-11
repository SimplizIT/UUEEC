class AddHstoreToObligations < ActiveRecord::Migration
  def change
    add_column :obligations, :swaps_offered, :hstore, default: {}
  end
end
