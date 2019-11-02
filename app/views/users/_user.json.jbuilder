json.extract! user, :id, :username, :email, :encrypted_password, :sign_in_count, :is_admin, :is_super_admin, :created_at, :updated_at
json.url user_url(user, format: :json)
