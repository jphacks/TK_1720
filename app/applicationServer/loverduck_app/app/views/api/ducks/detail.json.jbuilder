json.array!(@daily_logs) do |log|
  json.(log, :start_at, :end_at)
end
