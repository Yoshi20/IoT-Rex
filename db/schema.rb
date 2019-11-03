# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_03_152300) do

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
    t.bigint "user_group_id"
  end

  create_table "event_template_lists", force: :cascade do |t|
    t.string "name", null: false
    t.string "device_type"
    t.string "channel"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_group_id"
  end

  create_table "event_templates", force: :cascade do |t|
    t.string "name", null: false
    t.string "static_data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_group_id"
    t.bigint "event_template_list_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "data"
    t.bigint "live_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "device_id"
    t.bigint "event_template_id"
    t.bigint "user_group_id"
  end

  create_table "user_groups", force: :cascade do |t|
    t.string "name", null: false
    t.string "phone_number"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email", null: false
    t.string "encrypted_password", null: false
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "last_sign_in_at"
    t.boolean "is_admin"
    t.boolean "is_super_admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_group_id"
  end

  add_foreign_key "devices", "user_groups"
  add_foreign_key "event_template_lists", "user_groups"
  add_foreign_key "event_templates", "event_template_lists"
  add_foreign_key "event_templates", "user_groups"
  add_foreign_key "events", "devices"
  add_foreign_key "events", "event_templates"
  add_foreign_key "events", "user_groups"
  add_foreign_key "users", "user_groups"
end
