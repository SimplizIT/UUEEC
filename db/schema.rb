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

ActiveRecord::Schema.define(version: 20140430172446) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "adults", force: true do |t|
    t.string  "first_name",    default: "", null: false
    t.string  "last_name",     default: "", null: false
    t.string  "primary_phone", default: "", null: false
    t.date    "birthdate"
    t.integer "user_id"
  end

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

  create_table "children", force: true do |t|
    t.string  "first_name",           default: "",    null: false
    t.string  "last_name",            default: "",    null: false
    t.string  "nickname",             default: "",    null: false
    t.date    "birthdate"
    t.boolean "vaccinations_current", default: false, null: false
    t.boolean "vaccination_waiver",   default: false, null: false
    t.boolean "enrolled",             default: false, null: false
    t.string  "program",              default: "",    null: false
    t.string  "relationship",         default: "",    null: false
    t.text    "child_custody",        default: "",    null: false
    t.text    "info",                 default: "",    null: false
    t.hstore  "application_info",     default: {},    null: false
  end

  create_table "children_users", force: true do |t|
    t.integer  "child_id"
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
    t.date     "all_date"
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
    t.hstore   "swaps_offered",   default: {}
  end

  add_index "obligations", ["user_id", "all_date"], name: "index_obligations_on_user_id_and_all_date", unique: true, using: :btree

  create_table "programs", force: true do |t|
    t.string  "title",                        default: "",   null: false
    t.string  "age_range",                    default: "",   null: false
    t.string  "meets",                        default: "",   null: false
    t.string  "number_of_teachers",           default: "",   null: false
    t.string  "child_to_staff_ratio",         default: "",   null: false
    t.integer "annual_tuition",               default: 0,    null: false
    t.boolean "extended_day_option",          default: true, null: false
    t.text    "program_specific_information", default: "",   null: false
    t.hstore  "program_info",                 default: {},   null: false
  end

  create_table "users", force: true do |t|
    t.string   "first_name",             default: "",                                                                                                                                                                     null: false
    t.string   "last_name",              default: "",                                                                                                                                                                     null: false
    t.string   "email",                  default: "",                                                                                                                                                                     null: false
    t.date     "birthdate"
    t.integer  "roles_mask"
    t.string   "encrypted_password",     default: "",                                                                                                                                                                     null: false
    t.string   "image"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,                                                                                                                                                                      null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "crop_x"
    t.integer  "crop_y"
    t.integer  "crop_w"
    t.integer  "crop_h"
    t.string   "primary_phone",          default: "",                                                                                                                                                                     null: false
    t.string   "secondary_phone",        default: "",                                                                                                                                                                     null: false
    t.string   "home_street",            default: "",                                                                                                                                                                     null: false
    t.string   "home_city",              default: "",                                                                                                                                                                     null: false
    t.string   "home_state",             default: "",                                                                                                                                                                     null: false
    t.string   "home_zip",               default: "",                                                                                                                                                                     null: false
    t.string   "work_title",             default: "",                                                                                                                                                                     null: false
    t.string   "occupation",             default: "",                                                                                                                                                                     null: false
    t.string   "employer",               default: "",                                                                                                                                                                     null: false
    t.string   "work_phone",             default: "",                                                                                                                                                                     null: false
    t.string   "work_street",            default: "",                                                                                                                                                                     null: false
    t.string   "work_city",              default: "",                                                                                                                                                                     null: false
    t.string   "work_state",             default: "",                                                                                                                                                                     null: false
    t.string   "work_zip",               default: "",                                                                                                                                                                     null: false
    t.string   "useful_skills",          default: "",                                                                                                                                                                     null: false
    t.string   "custody",                default: "",                                                                                                                                                                     null: false
    t.boolean  "uua_member",             default: false,                                                                                                                                                                  null: false
    t.string   "find_us",                default: "",                                                                                                                                                                     null: false
    t.string   "best_contact",           default: "",                                                                                                                                                                     null: false
    t.boolean  "share_contact_info",     default: false,                                                                                                                                                                  null: false
    t.string   "spouse_first_name",      default: "",                                                                                                                                                                     null: false
    t.string   "spouse_last_name",       default: "",                                                                                                                                                                     null: false
    t.date     "spouse_birthdate"
    t.string   "spouse_primary_phone",   default: "",                                                                                                                                                                     null: false
    t.string   "spouse_secondary_phone", default: "",                                                                                                                                                                     null: false
    t.string   "spouse_email",           default: "",                                                                                                                                                                     null: false
    t.string   "spouse_relationship",    default: "",                                                                                                                                                                     null: false
    t.boolean  "spouse_pickup",          default: false,                                                                                                                                                                  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.hstore   "home_address",           default: {"e_home_zip"=>"", "c_home_city"=>"", "a_home_phone"=>"", "d_home_state"=>"", "b_home_street"=>""}
    t.hstore   "work_address",           default: {"f_work_zip"=>"", "d_work_city"=>"", "a_work_title"=>"", "b_work_phone"=>"", "e_work_state"=>"", "c_work_street"=>"", "h_work_employer"=>"", "g_work_occupation"=>""}
    t.hstore   "application_info",       default: {"a_skills"=>"", "b_custody"=>"", "d_find_us"=>"", "c_member_uua"=>""}
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
