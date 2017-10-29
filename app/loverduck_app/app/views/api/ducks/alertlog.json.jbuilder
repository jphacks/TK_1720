json.array!(@alert_logs) do |log|
  json.extract! log, :called_at, :status
end
