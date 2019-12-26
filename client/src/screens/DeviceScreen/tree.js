export class EventTree {
  constructor(rootNode) {
    this.rootNode = rootNode || null;
  }

  getEvent(eventId) {}
}

export class EventNode {
  constructor(text = '', timeout = -1, timeoutEvent = null, acknowledgeEvent = null) {
    this.id = '';
    this.text = text;
    this.timeout = timeout;
    this.timeoutEvent = timeoutEvent;
    this.acknowledgeEvent = acknowledgeEvent;
  }

  addAcknowledgeEvent(eventNode) {
    eventNode.id = this.id + 'a';
    this.acknowledgeEvent = eventNode;
  }

  addTimeoutEvent(timeout, eventNode) {
    eventNode.id = this.id + 't';
    this.timeout = timeout;
    this.timeoutEvent = eventNode;
  }
}
