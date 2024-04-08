import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    render() {
        return (
            <>
                <div className="pl-4 mt-8 ml-[5rem] max-w-[70.3rem] space-y-2 box mb-1">
                    <h2 className="font-bold text-[1.5rem]">Count: {this.state.count}</h2>
                    <h2 className="font-bold text-[1.5em]">Name: {this.props.name}</h2>
                    <h3 className="font-bold text-[1.17em]">Location: Agra</h3>
                    <h4 className="font-bold text-[1em]">Github_UserName: 21tushar</h4>
                </div>
            </>
        );
    }
}

export default UserClass;
