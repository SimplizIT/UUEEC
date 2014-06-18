module ProgramsControllerHelper

  def options_for_programs
    ['Toddler (age: 2)', 'Preschool (age: 3)', 'Pre-Kindergarten (age: 4)']
  end

   def select_state
    ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
  end

  def select_relationship
    ['Aunt', 'Brother', 'Daughter', 'Friend', 'Grandparent', 'Husband', 'Significant Other', 'Sister','Son', 'Uncle', 'Wife' ]
  end

  def select_category
    array = []
    FaqCategory.all.each do |cat|
      array.push(cat.name)
    end
    array
  end
end
