json.array!(@daily_logs) do |log|
  json.extract! log, :start_at, :end_at
end
