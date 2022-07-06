import React from 'react';
// import CoverFlow from 'coverflow-react';
import CoverFlow from '../coverflow/src/CoverFlow/CoverFlow'
import './card.css';


class Component extends React.Component {
  constructor(props){
    super(props);
    this.passPropCheckbox = this.passPropCheckbox.bind(this);
    this.inputRow = this.inputRow.bind(this);
    this.itemRatio = this.itemRatio.bind(this);
    this.code = this.code.bind(this);
    this.state = {
      width: 300,
      passWidth: true,
      height: 600,
      passHeight: true,
      passLabels: true,
      passItemRatio: true,
      itemRatio: {
        x: 8,
        y: 5
      },
  
      direction: 'vertical'
    };
    window.addEventListener('resize', ()=>{
      this.setState((prevState)=>{
        if (prevState.direction === 'vertical') {
          return {
            height: 600
          };
        }
        return {
          width: 300
        }
      });
    });
  }
  render(){
    const imagesArr = [
        "./img/cardlogo.png",
        "./img/visa.png",
        "./img/master.png",
        "./img/cardlogo.png",
        "./img/visa.png",
        "./img/cardlogo.png",
        "./img/visa.png",
        "./img/master.png",
        "./img/cardlogo.png",
        "./img/visa.png", 
        "./img/cardlogo.png",
        "./img/visa.png",
        "./img/master.png",
        "./img/cardlogo.png",
        "./img/visa.png",
        "./img/cardlogo.png",
        "./img/visa.png",
        "./img/master.png",
        "./img/cardlogo.png",
        "./img/visa.png", 
    ];
    let labelsArr = [
      'My Card',
      'Visa Card',
      'Master Card',
      'My Card',
      'Visa Card',
      'My Card',
      'Visa Card',
      'Master Card',
      'My Card',
      'Visa Card',
      'My Card',
      'Visa Card',
      'Master Card',
      'My Card',
      'Visa Card',
      'My Card',
      'Visa Card',
      'Master Card',
      'My Card',
      'Visa Card',
    ];
    this.labelsArr = labelsArr;
    let props = {};
    props.imagesArr = imagesArr;
    console.log(props.imagesArr);
    if (this.state.passLabels) {
      props.labelsArr = labelsArr;
    }
    if (this.state.passWidth) {
      props.width = this.state.width;
    }
    if (this.state.passHeight){
      props.height = this.state.height;
    }
    if (this.state.passItemRatio) {
      props.itemRatio = `${this.state.itemRatio.x}:${this.state.itemRatio.y}`;
    }
    props.direction = this.state.direction;
    let demoStyle = {};
    if (this.state.direction === 'vertical') {
      demoStyle['flexDirection'] = 'row';
    }
    return (
      <div className="demo" justify-content={'center'}  align-items={'center'} style={demoStyle}>
        <div className="properties">
          {this.code()}
        </div>
        <CoverFlow  {...props} background={'white'}   h>
        <img src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        </CoverFlow>
      </div>
    );
  }
  passPropCheckbox(propName) {
    return (<input
                    checked={this.state[propName]}
                      onChange={(e)=>{
                        this.setState((prevState, props)=>{
                          let newState = {};
                          newState[propName] =  !prevState[propName];
                          return newState;
                        });
                      }} />);
  }
  inputRow(name, type){
    let passName = 'pass' + name.charAt(0).toUpperCase() + name.slice(1);
    return (<div>
              {this.passPropCheckbox(passName)}
              <label>Container {name}:</label>
              <input placeholder={name} 
                    type={type}
                    min="1"
                    value={this.state[name]} 
                    onChange={(e)=>{
                      let newState = {};
                      newState[name] = type === 'number' ? parseInt(e.target.value) : e.target.value;
                      this.setState(newState);
                    }}
                    disabled={!this.state[passName]} />
            </div>);
  }
  itemRatio(){
    const axisInput = (axis) => {
      return (<input placeholder={axis}
                    type="number" 
                    min="1"
                    style={{width: '20px'}}
                    value={this.state.itemRatio[axis]} 
                    onChange={(e)=>{
                      let newState = {
                        itemRatio: {}
                      };
                      newState.itemRatio[axis] = parseInt(e.target.value);
                      let otherAxis = axis === 8 ? 5 : 8;
                      newState.itemRatio[otherAxis] = this.state.itemRatio[otherAxis];
                      this.setState(newState);
                    }}
                    disabled={!this.state.passItemRatio}/>);
    };
  }
   code(){

   }
}


export default Component;