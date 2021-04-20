class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log(`You clicked ${this.state.count} times`);
    }

    componentDidUpdate() {
        console.log(`You clicked ${this.state.count} times`);
    }

    componentWillUnmount() {
        console.log(`Component will be destroyed with ${this.state.count} clicks`);
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
          </button>
            </div>
        );
    }
}
