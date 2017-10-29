json.array!(@alert_logs) do |log|
  json.(log, :called_at, :status, :alert_id)
end
