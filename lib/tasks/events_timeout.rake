namespace :events do

  desc "Checks if there are timeouted events and handle them"
  task :timeout => :environment do
    # puts 'Get not acknowledged and timeouted events...'
    events = Event.where("acknowledged is false and timeouts_at < ?", Time.now)
    # puts "  found #{events.count} events"
    events.each do |e|
      # check if there's a timeout_event
      te_id = e.event_configuration.timeout_event_id
      if te_id.present?
        ec = EventConfiguration.find(te_id)
        d = e.device
        # create a new event
        event = Event.new
        event.text = d.name + " - " + ec.text
        event.data = e.data
        event.timeouts_at = Time.now + ec.timeout.seconds unless ec.timeout.nil?
        event.event_configuration = ec
        event.device = d
        event.save!
        # puts '  new event created'
      end
      e.update!(acknowledged: true)
    end
    # puts 'done'
  end

end
