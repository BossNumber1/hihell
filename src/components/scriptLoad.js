import React from "react";

class ScriptLoad extends React.Component {
    constructor(props) {
        super(props);
        this.state = { elementState: ''};  
        // let ii = this.props.name;
        // this.state = { elementState: ii }; 
    }

    // state = { elementState: ''}

    componentDidMount() {
        // console.log(props);
                                                                    // if (2 + 3 == 5) {
                                                                    //     let onVivod = 5;

                                                                    //     this.setState({
                                                                    //         elementState: onVivod
                                                                    //     });
                                                                    // };
      
        let lol = this.props.name;
        // let lol = this.props;

        // console.log(lol);
        // console.log("r1");
                                                                //    console.log(this.props.name);
        this.setState({
            elementState: lol
         });
        // console.log(ii);
    }

    render() {
        return (
            <div>{this.props.name}
              
                <h2>Твой логин2 - {this.state.elementState}!)</h2>
            </div>
        );
    }
}

export default ScriptLoad;