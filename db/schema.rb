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

ActiveRecord::Schema.define(version: 2019_11_17_143600) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "devices", force: :cascade do |t|
    t.string "name", null: false
    t.string "device_type", null: false
    t.string "dev_eui", null: false
    t.string "app_eui"
    t.string "app_key"
    t.string "hw_version"
    t.string "fw_versioin"
    t.integer "battery"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "event_template_list_id"
    t.bigint "organisation_id"
  end

  create_table "event_template_lists", force: :cascade do |t|
    t.string "name", null: false
    t.string "device_type"
    t.string "channel"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "organisation_unit_id"
  end

  create_table "event_template_organisation_units", id: false, force: :cascade do |t|
    t.bigint "event_template_id", null: false
    t.bigint "organisation_unit_id", null: false
    t.index ["event_template_id"], name: "index_event_template_organisation_units_on_event_template_id"
    t.index ["organisation_unit_id"], name: "index_event_template_organisation_units_on_organisation_unit_id"
  end

  create_table "event_templates", force: :cascade do |t|
    t.string "name", null: false
    t.integer "position"
    t.string "static_data"
    t.bigint "delay"
    t.bigint "interval"
    t.integer "number_of_times"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "event_template_list_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "data"
    t.bigint "live_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "device_id"
    t.bigint "event_template_id"
  end

  create_table "jwt_blacklist", id: :serial, force: :cascade do |t|
    t.string "jti", null: false
    t.index ["jti"], name: "index_jwt_blacklist_on_jti"
  end

  create_table "organisation_units", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "organisation_id"
  end

  create_table "organisations", force: :cascade do |t|
    t.string "name", null: false
    t.string "phone_number"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.integer "rights"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "organisation_unit_id"
    t.bigint "role_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "devices", "event_template_lists"
  add_foreign_key "devices", "organisations"
  add_foreign_key "event_template_lists", "organisation_units"
  add_foreign_key "event_templates", "event_template_lists"
  add_foreign_key "events", "devices"
  add_foreign_key "events", "event_templates"
  add_foreign_key "organisation_units", "organisations"
  add_foreign_key "users", "organisation_units"
  add_foreign_key "users", "roles"
end
