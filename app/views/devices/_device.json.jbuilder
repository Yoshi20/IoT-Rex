json.extract! device, :id, :name, :device_type, :dev_eui, :app_eui, :app_key, :hw_version, :fw_versioin, :created_at, :updated_at
json.url device_url(device, format: :json)
