class Card extends React.Component{

    time = 5000
    timer = setTimeout(this.someFunction, time)

    componentWillUnmount(){
        this.timer.clearTimeout()
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentDidMount(){
        //run some code here when page has loaded
        console.log("component did mount")
    }

    someFunction(){
        console.log("some function...")
    }

    render(){
        return(
            <div className="row">
                <div className="col">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={this.props.image} alt="" />
                        </div>
                        <div className="card-content">
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}