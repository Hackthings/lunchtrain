import React from 'react';

class TrainsListEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      joined: false,
    };
  }

  render() {
    return (
      <div className="trainEntry">
        <div className="trainContainer">
          <div className="trainIconTimeWrapper">
            <div className="trainIcon"></div>
            <div className="timeWrapper">
              <div className="time">{this.props.train.timeDeparting} --- {this.props.train.timeBack}</div>
            </div>
          </div>
          <div className="trainDetailsWrapper">
            <h2 className="trainDest">{this.props.train.destination.name}</h2>
            <div className="trainRatingsWrapper">
              <div className="likes"><div>♥3</div></div>
              <div className="price"><div>$$</div></div>
            </div>
          </div>
          <div className="passengersWrapper">
            <div className="conductor passenger">
              <img className="slackPic" src={this.props.train.conductor.gravatar} />
            </div>
            {this.props.train.users.map( passenger =>
              <div className="passenger">
                <img className="slackPic" src={passenger.gravatar} />
              </div>
            )}
            <div className="joinWrapper" onClick={
              (e) => {
                this.props.joinTrain(e, this.props.train, this.state.joined);
                this.setState({
                  joined: true,
                });
              }
            }>
              <div className="joinArrow">»</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainsListEntry;
