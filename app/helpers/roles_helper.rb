module RolesHelper
  def sortable(column, title = nil)
    title ||= column.titleize
    css_class = column == sort_column ? 'current ' + sort_direction : nil
    if column == sort_column && sort_direction == 'asc'
      css_icon = 'fa fa-chevron-down'
    elsif column == sort_column && sort_direction == 'desc'
      css_icon = 'fa fa-chevron-up'
    else
      css_icon = nil
    end
    direction = column == sort_column && sort_direction == 'asc' ? 'desc' : 'asc'
    content_tag(:i, link_to(title, {sort: column, direction: direction}, {class: css_class}), class: css_icon)
  end
end
