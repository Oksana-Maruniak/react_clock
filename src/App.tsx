import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './services/RandomName';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    window.clearInterval(this.timerId);
  };

  handleLeftClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.setState({ hasClock: true });
    }

    if (event.key === ' ') {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div
        className="App"
        onContextMenu={this.handleRightClick}
        onClick={this.handleLeftClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <Clock />
          </div>
        ) : (
          null
        )}
      </div>
    );
  }
}

/*
componentDidMount(): void {
    this.state.timerIdForName = window.setInterval(() => {
      this.setState(prevState => ({ oldName: prevState.newName }));
      this.setState({ newName: getRandomName() });

      // eslint-disable-next-line no-console
      console.info(`Renamed from ${this.state.oldName} to ${this.state.newName}`);
    }, 3300);
  }

*/

/*
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
  };

  handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.setState({ hasClock: true });
    }

    if (event.key === ' ') {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div
        className="App"
        onContextMenu={this.handleRightClick}
        onClick={this.handleLeftClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <Clock />
        ) : (
          null
        )}
      </div>
    );
  }
}
*/

/*
  handleLeftClick = document.addEventListener(
    'click',
    () => this.setState({ hasClock: true }),
  );
*/

/*
      return (
      <div
        className="App"
        onContextMenu={(e) => {
          e.preventDefault();
          this.setState({ hasClock: false })
        }}
        onClick={() => this.setState({ hasClock: true })}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <Clock name={clockName} />
        ) : (
          null
        )}
      </div>
    );

  */

/*
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
  };

  handleRightClick = document.addEventListener(
    'contextmenu',
    (event: React.MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    },
  );

  handleLeftClick = document.addEventListener(
    'click',
    (event: React.MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    },
  );

  render() {
    const { hasClock } = this.state;

    return (
      <div
        className="App"
        onContextMenu={this.handleRightClick}
        onClick={this.handleLeftClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <Clock />
        ) : (
          null
        )}
      </div>
    );
  }
}
*/

// componentDidMount(): void {
//   this.state.timerIdForName = window.setInterval(() => {
//     this.setState({ newName: getRandomName() });
// }

// componentDidUpdate(prevState: Readonly<State>): void {
//   this.state.timerIdForName = window.setInterval(() => {
//     this.setState({ newName: getRandomName() });
//   }, 3300);

//   if (prevState.oldName !== this.state.newName) {
//     this.setState({ oldName: prevState.newName });
//   }

//   // eslint-disable-next-line no-console
//   console.debug(`Renamed from ${this.state.oldName} to ${this.state.newName}`);
// }

// componentDidUpdate(prevState: Readonly<State>): void {
//   this.state.timerIdForName = window.setInterval(() => {
//     this.setState(prevState => ({ oldName: prevState.newName }));
//     this.setState({ newName: getRandomName() });

//     // eslint-disable-next-line no-console
//     console.info(`Renamed from ${this.state.oldName} to ${this.state.newName}`);
//   }, 3300);
// }
