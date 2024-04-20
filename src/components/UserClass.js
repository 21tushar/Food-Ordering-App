import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/21tushar");
    const res = await data.json();

    this.setState({
      userInfo: res,
    });

    console.log(res);
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <>
        <div className="mt-8 ml-[5rem] max-w-[37rem] box mb-1 grid grid-cols-2">
          <div className="grid grid-cols-1 pl-5">
            <img src={avatar_url} alt="github_image" />
          </div>
          <div className="grid grid-cols-1 mt-5 -ml-2">
            <h2 className="font-bold text-[1.5em]">Name: {name}</h2>
            <h3 className="font-bold text-[1.17em]">Location: {location}</h3>
            <h4 className="font-bold text-[1em]">Github_UserName: {login}</h4>
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;
