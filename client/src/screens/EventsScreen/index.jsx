import React from 'react';
import { connect } from 'react-redux';

/* Components */
import SiteHeader from '../../components/SiteHeader';
import EventListElement from '../../components/EventListElement';
import DoneIcon from '@material-ui/icons/Done';

/* Store */
import { eventsGet, eventAck } from '../../store/modules/events';

/* Styles */
import '../../styles/layout.scss';
import styles from './EventsScreen.module.scss';

import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

class EventsScreen extends React.Component {
  intervalID = 0;

  pollEvents = () => {
    this.intervalID = setInterval(() => {
      this.props.eventsGet(this.props.userOrganisationId);
    }, 1000);  // every 1 seconds
  };

  componentDidMount() {
    this.pollEvents();
  }

  componentDidUpdate(prevProps) {
    if (this.props.userOrganisationId !== prevProps.userOrganisationId) {
      this.props.eventsGet(this.props.userOrganisationId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  swipeEvent = (e_id) => {
    this.props.eventAck(e_id).then(() => {
      this.props.eventsGet(this.props.userOrganisationId);
      /* reset poll interval */
      clearInterval(this.intervalID);
      this.pollEvents();
    })
  }

  render() {
    let now = new Date();
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle="Events" subTitle={this.props.userOrganisationName} />
          {this.props.events.length > 0 && (
            <div className={styles.eventListHeader}>
              {(this.props.events.length > 1) ? (this.props.events.length + " Events übrig") : ("1 Event übrig")}
            </div>
          )}
          <div className={styles.events}>
            <SwipeableList
              scrollStartThreshold={10}
              swipeStartThreshold={10}
              threshold={0.1}
            >
              {this.props.events.map((event, i) => (
                  <SwipeableListItem
                    key={i}
                    swipeLeft={{
                      content: (
                        <div className={styles.contentRight}>
                          <span><DoneIcon /></span>
                        </div>
                      ),
                      action: () => {this.swipeEvent(event.id)}
                    }}
                    swipeRight={{
                      content: (
                        <div className={styles.contentLeft}>
                          <span><DoneIcon /></span>
                        </div>
                      ),
                      action: () => {this.swipeEvent(event.id)}
                    }}
                    blockSwipe={(event.timeouts_at > 0) && ((event.timeouts_at - now) < 0)}
                  >
                    <EventListElement
                      key={i}
                      text={event.text}
                      time={Date.parse(event.created_at)}
                      timeout={Date.parse(event.timeouts_at)}
                      sendAck={this.props.eventAck}
                      id={event.id}
                    />
                  </SwipeableListItem>
              ))}
            </SwipeableList>
          </div>
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
