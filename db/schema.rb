# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_14_124300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.string "company", null: false
    t.string "website"
    t.string "form_of_address"
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "phone_number"
    t.string "delivery_address", null: false
    t.string "billing_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "device_configurations", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "device_type_id"
    t.bigint "organisation_unit_id"
  end

  create_table "device_types", force: :cascade do |t|
    t.string "name"
    t.integer "number_of_buttons"
  end

  create_table "devices", force: :cascade do |t|
    t.string "name", null: false
    t.string "dev_eui", null: false
    t.string "app_eui"
    t.string "app_key"
    t.string "hw_version"
    t.string "fw_version"
    t.integer "battery"
    t.bigint "device_configuration_id"
    t.bigint "organisation_unit_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "device_type_id"
    t.bigint "organisation_id"
  end

  create_table "event_config_organisation_units", id: false, force: :cascade do |t|
    t.bigint "event_configuration_id", null: false
    t.bigint "organisation_unit_id", null: false
    t.index ["event_configuration_id"], name: "index_event_config_organisation_units_on_event_configuration_id"
    t.index ["organisation_unit_id"], name: "index_event_config_organisation_units_on_organisation_unit_id"
  end

  create_table "event_configurations", force: :cascade do |t|
    t.string "text"
    t.integer "level"
    t.bigint "acknowledged_event_id"
    t.bigint "timeout"
    t.bigint "timeout_event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "notification_channel_id"
    t.bigint "event_trigger_id"
  end

  create_table "event_triggers", force: :cascade do |t|
    t.integer "button_number"
    t.integer "image_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "lora_message_type_id"
    t.bigint "device_configuration_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "text"
    t.string "data"
    t.datetime "timeouts_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "event_configuration_id"
    t.bigint "device_id"
  end

  create_table "jwt_blacklist", id: :serial, force: :cascade do |t|
    t.string "jti", null: false
    t.index ["jti"], name: "index_jwt_blacklist_on_jti"
  end

  create_table "lora_message_types", force: :cascade do |t|
    t.string "message_id"
    t.string "message_text"
  end

  create_table "notification_channels", force: :cascade do |t|
    t.string "name"
  end

  create_table "organisation_units", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "administration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "organisation_id"
  end

  create_table "organisations", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "contact_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.integer "rights"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "role_id"
    t.bigint "organisation_unit_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "device_configurations", "device_types"
  add_foreign_key "device_configurations", "organisation_units"
  add_foreign_key "devices", "device_types"
  add_foreign_key "devices", "organisations"
  add_foreign_key "event_configurations", "event_triggers"
  add_foreign_key "event_configurations", "notification_channels"
  add_foreign_key "event_triggers", "device_configurations"
  add_foreign_key "event_triggers", "lora_message_types"
  add_foreign_key "events", "devices"
  add_foreign_key "events", "event_configurations"
  add_foreign_key "organisation_units", "organisations"
  add_foreign_key "organisations", "contacts"
  add_foreign_key "users", "organisation_units"
  add_foreign_key "users", "roles"
end
