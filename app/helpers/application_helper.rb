module ApplicationHelper

  # This is used with flash notices and alertify.  
  def flash_class(level)
    case level
        when :notice then "alert alert-success"
        when :success then "alert alert-success"
        when :error then "alert alert-error"
        when :alert then "alert alert-error"
    end
  end

  def link_to_remove_fields(name, f)
    f.hidden_field(:_destroy) + link_to_function(name, "remove_fields(this)", class: 'divinline btn btn-primary btn-useryellow add_person_div add_person_fields')
  end

  def link_to_add_fields(name, f, association, path = '')
    new_object = f.object.class.reflect_on_association(association).klass.new
    fields = f.fields_for(association, new_object, :child_index => "new_#{association}") do |builder|
      render(path + association.to_s.singularize + "_fields", :f => builder)
    end
    link_to_function(name, "add_fields(this, \"#{association}\", \"#{escape_javascript(fields)}\")", class: 'divinline btn btn-primary btn-userblue add_person_div add_person_fields')
  end
end
