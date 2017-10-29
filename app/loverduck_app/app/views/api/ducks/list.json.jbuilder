json.array!(@ducks) do |duck|
  json.extract! duck, :name, :id, :status
end
