import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* Components */
import SiteHeader from '../../components/SiteHeader';
import CompletedEventListElement from '../../components/CompletedEventListElement';
import DefaultButton from '../../components/DefaultButton';

/* Store */
import { completedEventsGet } from '../../store/modules/events';

/* Styles */
import '../../styles/layout.scss';
import styles from './CompletedEventsScreen.module.scss';

class CompletedEventsScreen extends React.Component {
  intervalID = 0;

  pollCompletedEvents = () => {
    this.intervalID = setInterval(() => {
      this.props.completedEventsGet(this.props.userOrganisationId);
    }, 10000);  // every 10 seconds
  };

  componentDidMount() {
    this.props.completedEventsGet(this.props.userOrganisationId);
    this.pollCompletedEvents();
  }

  componentDidUpdate(prevProps) {
    if (this.props.userOrganisationId !== prevProps.userOrganisationId) {
      this.props.completedEventsGet(this.props.userOrganisationId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle="Abgeschlossene Events" subTitle={this.props.userOrganisationName} />
          {this.props.completedEvents.length > 0 && (
            <div className={styles.completedEventListHeader}>
              {(this.props.completedEvents.length > 1) ? (this.props.completedEvents.length + " Events gefunden") : ("1 Event gefunden")}
            </div>
          )}
          <div className={styles.completedEvents}>
            {this.props.completedEvents.map((event, i) => (
              <CompletedEventListElement
                key={i}
                text={event.text}
                time={Date.parse(event.created_at)}
                acknowledged={event.acknowledged}
                acknowledged_by={event.acknowledged_by}
                acknowledged_at={Date.parse(event.acknowledged_at)}
                timeout={Date.parse(event.timeouts_at)}
                timeouted={event.timeouted}
                level={event.level}
                id={event.id}
              />
            ))}
          </div>
          <div className={styles.buttonDiv}>
            <DefaultButton
              text={"Events"}
              style={{
                marginTop: '4rem'
              }}
              onClick={
                () => {
                  this.props.history.replace('/events')
                }
              }
            />
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
    completedEvents: events.allCompletedEvents,
  };
}

const mapDispatchToProps = {
  completedEventsGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CompletedEventsScreen));
