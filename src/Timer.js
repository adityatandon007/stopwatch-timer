import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleStartStopButton} from './actionCreators';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHr: 0,
      currentMin: 0,
      currentSec: 0,
      currentMillisec: 0,
      intervalId: '',
      startStopButton: 'Start',
      resetDisabled: true
    };
  }

  timerButton(){
    if(this.props.startStopButton === 'Start'){
      this.props.toggleStartStopButton('Stop')
      this.startTimer()
    } else if(this.props.startStopButton === 'Stop'){
      this.props.toggleStartStopButton('Start')
      this.stopTimer()
    }
  }

  onKeyPressed(event){
    let key = event.which || event.keyCode;
    if(key === 32 ){
      event.preventDefault();
      this.timerButton();
    }
  } 

  startTimer(){
    let timerInterval= setInterval(()=>{
      let ms = this.state.currentMillisec+1;
      this.setState({
        currentMillisec: ms});
      if(this.state.currentMillisec === 100){
        this.setState({
          currentMillisec: 0
        })
        let sec=this.state.currentSec+1;
        this.setState({
          currentSec: sec
        })
      }
      if(this.state.currentSec === 60){
        this.setState({
          currentSec: 0
        })
        let min=this.state.currentMin+1;
        this.setState({
          currentMin: min
        })
      }
      if(this.state.currentMin === 60){
        this.setState({
          currentMin: 0
        })
        let hr=this.state.currentHr+1;
        this.setState({
          currentHr: hr
        })
      }
    },10)
    this.setState({intervalId: timerInterval,startStopButton: 'Stop'})
  }

  stopTimer(){
    clearInterval(this.state.intervalId)
    let ms = this.state.currentMillisec;
    this.setState({
      currentMillisec: ms,
      startStopButton: 'Start',
      resetDisabled: false
    })
  }

  resetTimer(){
    this.setState({
      currentHr: 0,
      currentMin: 0,
      currentSec: 0,
      currentMillisec: 0,
      startStopButton: 'Start',
      resetDisabled: true
    })
  }

  render() {
    return (
      <div id="stopwatch" className="timer" tabIndex="0" onKeyDown={this.onKeyPressed.bind(this)}>
        <h3>Stopwatch Timer</h3>
        <TimerDisplay
        hr={this.state.currentHr}
        min={this.state.currentMin} 
        sec={this.state.currentSec}
        milliSec={this.state.currentMillisec} 
        />
        <button className="btn" onClick={this.timerButton.bind(this)} >{this.state.startStopButton}</button>
        <button className={this.state.resetDisabled ? 'btn btn-disable' : 'btn'} disabled={this.state.resetDisabled} onClick={this.resetTimer.bind(this)} >Reset</button>
      </div>
    );
  } 
}

const TimerDisplay =(props)=> (
      <div>  
        <p>
        <span className="hrs">{props.hr.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} </span> :  
        <span className="minutes">{props.min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} </span> :
        <span className="seconds"> {props.sec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</span> :
        <span className="milliseconds"> {props.milliSec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} </span>
        </p>
      </div>
    )

const mapStateToProps = state => ({
      currentHr: state.currentHr,
      currentMin: state.currentMin,
      currentSec: state.currentSec,
      currentMillisec: state.currentMillisec,
      intervalId: state.intervalId,
      startStopButton: state.startStopButton,
      resetDisabled: state.resetDisabled
})
const mapDispatchToProps = (dispatch) => ({
  toggleStartStopButton(label) {
    dispatch(toggleStartStopButton(label));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);