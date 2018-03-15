import React from 'react';
import { Paper } from 'react-md';

class CustomPaper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dptInx: this.props.depth,
            bdTxt: this.props.body
        }
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            dptInx: nextProps.depth,
            bdTxt: nextProps.body
        });
    }
    render = () => (
        <div className="papers__container">
            <Paper
                zDepth={this.state.dptInx}
                raiseOnHover={true}
                className="papers__example"
            >
                {this.state.bdTxt}
            </Paper>
        </div>
    );
}

export default CustomPaper;