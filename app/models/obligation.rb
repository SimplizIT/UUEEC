class Obligation < ActiveRecord::Base
  belongs_to :user

  scope :currentobligations, -> (date) { where('start >= ?', date) }
  scope :swaps, -> { where('up_for_swap = ? AND start >= ?', true, Date.today) }

  def swapremove(obligation, action)
    if action == 'swap' && obligation.up_for_swap == false
      obligation.up_for_swap = true
      obligation.save
      return { flashkey: :success, flashvalue: 'Obligation now up for swap' }
    elsif action == 'swap' && obligation.up_for_swap == true
      return { flashkey: :error, flashvalue: 'Obligation is already up for swap' }
    elsif action == 'remove' && obligation.up_for_swap == true
      obligation.up_for_swap = false
      obligation.save
      return { flashkey: :success, flashvalue: 'Obligation removed from swap list' }
    elsif action == 'remove' && obligation.up_for_swap == false
      return { flashkey: :error, flashvalue: 'Obligation is not up for swap' }
    else
      return { flashkey: :error, flashvalue: 'Something is wrong' }
    end
  end
end
