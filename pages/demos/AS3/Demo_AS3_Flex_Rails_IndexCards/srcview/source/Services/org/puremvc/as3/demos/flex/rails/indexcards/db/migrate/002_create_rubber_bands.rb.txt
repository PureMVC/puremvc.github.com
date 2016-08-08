class CreateRubberBands < ActiveRecord::Migration
  def self.up
    create_table :rubber_bands do |t|
    end
  end

  def self.down
    drop_table :rubber_bands
  end
end
