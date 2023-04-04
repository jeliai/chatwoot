class AddDefaultValueToColor < ActiveRecord::Migration[6.0]
  def up
    Label.where(color: nil).find_each { |u| u.update(color: '#F24B5E') }

    change_column :labels, :color, :string, default: '#F24B5E', null: false
  end

  def down
    change_column :labels, :color, :string, default: nil, null: true
  end
end
