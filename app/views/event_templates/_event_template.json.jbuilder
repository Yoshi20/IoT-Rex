json.extract! event_template, :id, :name, :static_data, :created_at, :updated_at
json.url event_template_url(event_template, format: :json)
