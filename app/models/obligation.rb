class Obligation < ActiveRecord::Base
  belongs_to :user
  
  scope :currentobligations, -> (date) { where('start >= ?', date).order(:start) }
  scope :swaps, -> { where('up_for_swap = ? AND start >= ?', true, Date.today).order(:start) }

  def swapremove(obligation, action)
    if action == 'swap' && obligation.up_for_swap == false
      obligation.up_for_swap = true
      obligation.save
      return { flashkey: :success, flashvalue: 'Obligation now up for swop' }
    elsif action == 'swap' && obligation.up_for_swap == true
      return { flashkey: :error, flashvalue: 'Obligation is already up for swop' }
    elsif action == 'remove' && obligation.up_for_swap == true
      obligation.up_for_swap = false
      obligation.swaps_offered.clear
      obligation.swaps_offered_will_change!
      obligation.save
      return { flashkey: :success, flashvalue: 'Obligation removed from swop list' }
    elsif action == 'remove' && obligation.up_for_swap == false
      return { flashkey: :error, flashvalue: 'Obligation is not up for swop' }
    else
      return { flashkey: :error, flashvalue: 'Something is wrong' }
    end
  end

  def clean_up_swaps 
    obligations = Obligation.where('up_for_swap = ? AND start < ?', true, Date.today)
    obligations.each do |obligation|
      obligation.up_for_swap = false
      obligation.swap_proposals.clear
      obligation.swap_proposals_will_change!
      obligation.save
    end
  end

  def remove_from_swap_list
    
  end

  def self.swop_these_obligations(original, selected)
    p '%' * 10
      p 'we are in'
 
    attributes_original = { title: original.title, user_id: original.user_id, up_for_swap: original.up_for_swap }
    attributes_selected = { title: selected.title, user_id: selected.user_id, up_for_swap: selected.up_for_swap }

    p original
    p selected

    original.title = attributes_selected[:title]
    p attributes_selected[:title]
    p original.title
    original.user_id = attributes_selected[:user_id]
    p attributes_selected[:user_id]
    p original.user_id
    original.up_for_swap = false
    original.swaps_offered.clear
    original.swaps_offered_will_change!
    p original
    original.save

    selected.title = attributes_original[:title]
    p attributes_original[:title] 
    p selected.title
    selected.user_id = attributes_original[:user_id]
    p attributes_original[:user_id]
    p selected.user_id
    selected.up_for_swap = false
    p selected.up_for_swap
    selected.swaps_offered.clear
    selected.swaps_offered_will_change!
    p selected
    selected.save
    
    if true
      p 'we are at save point'
      up_for_swap = self.swaps
      up_for_swap.each do |obligation|
        obligation.swaps_offered.keep_if { |key, value| key != one.id || key != two.id }
        obligation.swaps_offered_will_change!
        obligation.save
      end
    end
  end
end


      