const app = new Vue({
  el: 'main',
  mounted: method('fetchGreeting'),
  data: {
    fetching: false,
    greeting: 'Loading...',
    greetingExcitement: 0,
    greetingLoud: false,
    greetingName: '',
    greetingRandom: true,
    greetingSalutation: 'Hello'
  },
  methods: {
    fetchGreeting: _.debounce(fetchGreeting, 250, { leading: true })
  },
  watch: {
    greetingExcitement: method('fetchGreeting'),
    greetingLoud: method('fetchGreeting'),
    greetingName: method('fetchGreeting'),
    greetingRandom: method('fetchGreeting'),
    greetingSalutation: method('fetchGreeting')
  }
});

function method(name) {
  return function(...args) {
    return this[name].call(this, ...args);
  };
}

async function fetchGreeting(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  if (this.fetching) {
    return;
  }

  this.fetching = true;

  const query = $.param({
    excitement: this.greetingExcitement,
    loud: this.greetingLoud ? '1' : '',
    name: this.greetingRandom ? undefined : this.greetingName,
    random: this.greetingRandom ? '1' : undefined,
    salutation: this.greetingSalutation
  });

  const res = await fetch(`/greeter?${query}`);
  if (res.status !== 200) {
    return;
  }

  const json = await res.json();
  this.greeting = json.greeting;
  this.fetching = false;
}
