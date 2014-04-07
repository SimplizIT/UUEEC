# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140324164246) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "blogs", force: true do |t|
    t.string   "title"
    t.text     "body"
    t.integer  "user_id"
    t.integer  "views"
    t.string   "image"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "bugs", force: true do |t|
    t.string   "title"
    t.string   "browser"
    t.string   "browser_version"
    t.text     "error"
    t.integer  "security_level"
    t.boolean  "resolved"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events", force: true do |t|
    t.string   "title"
    t.boolean  "allDay"
    t.string   "description"
    t.string   "note"
    t.datetime "start"
    t.datetime "end"
    t.string   "url"
    t.string   "className"
    t.boolean  "editable"
    t.string   "color"
    t.string   "backgroundColor"
    t.string   "borderColor"
    t.string   "textColor"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "links", force: true do |t|
    t.string   "category"
    t.string   "title"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "obligations", force: true do |t|
    t.string   "title"
    t.boolean  "allDay"
    t.string   "description"
    t.string   "note"
    t.datetime "start"
    t.datetime "end"
    t.string   "url"
    t.string   "className"
    t.boolean  "editable"
    t.string   "color"
    t.string   "backgroundColor"
    t.string   "borderColor"
    t.string   "textColor"
    t.integer  "user_id"
    t.boolean  "swapped",         default: false
    t.boolean  "up_for_swap",     default: false
    t.string   "swap_proposals",  default: [],    array: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "first_name",             default: "", null: false
    t.string   "last_name",              default: "", null: false
    t.string   "email",                  default: "", null: false
    t.integer  "roles_mask"
    t.string   "encrypted_password",     default: "", null: false
    t.string   "image"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "crop_x"
    t.integer  "crop_y"
    t.integer  "crop_w"
    t.integer  "crop_h"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.hstore   "settings"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "visitors", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.integer  "numkids"
    t.text     "ages"
    t.text     "howfindus"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
