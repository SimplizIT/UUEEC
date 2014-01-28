module BlogsHelper

  def markdown(blogtext)
    renderOptions = {hard_wrap: true, filter_html: true}
    markdownOptions = {autolink: true, no_intra_emphasis: true, underline: true, highlight: true, quote: true, space_after_headers: true}
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML.new(renderOptions), markdownOptions)
    markdown.render(blogtext).html_safe
  end

  def http_checker(url)
    /^http/.match(url) ? url : 'http://' + url
  end
end
