class CreateCards < ActiveRecord::Migration
  def self.up
    create_table :cards do |t|
    end
  end

  def self.down
    drop_table :cards
  end
end
