import React from 'react';
import { connect } from 'react-redux';

/* Components */
import SiteHeader from '../../components/SiteHeader';
import EventListElement from '../../components/EventListElement';

/* Store */
import { eventsGet, eventAck } from '../../store/modules/events';

/* Styles */
import '../../styles/layout.scss';
// import styles from './EventsScreen.module.scss';

class EventsScreen extends React.Component {
  componentDidMount() {
    this.props.eventsGet(this.props.userOrganisationId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userOrganisationId !== prevProps.userOrganisationId) {
      this.props.eventsGet(this.props.userOrganisationId);
    }
  }

  render() {
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle="Events" subTitle={this.props.userOrganisationName} />
          {this.props.events.map((event, i) => (
            <EventListElement
              key={i}
              text={event.text}
              time={Date.parse(event.created_at)}
              sendAck={this.props.eventAck}
              id={event.id}
            />
          ))}
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps({ user, events }) {
  return {
    userOrganisationId: user.organisation.id,
    userOrganisationName: user.organisation.name,
    events: events.allEvents,
  };
}

const mapDispatchToProps = {
  eventsGet,
  eventAck,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
