import React, { Component } from "react";
import Module from "./module";
class VideoModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: [
        {
          id: 1,
          name: "Introduction",
          discription: "An introction to the course",
          links: [
            { id: 1, link: "link1", duration: "9:10" },
            { id: 2, link: "link2", duration: "9:10" }
          ]
        },
        {
          id: 2,
          name: "Introduction",
          discription: "An introction to the course",
          links: [
            { id: 1, link: "link1", duration: "9:10" },
            { id: 2, link: "link2", duration: "9:10" }
          ]
        },
        {
          id: 3,
          name: "Introduction",
          discription: "An introction to the course",
          links: [
            { id: 1, link: "link1", duration: "9:10" },
            { id: 2, link: "link2", duration: "9:10" }
          ]
        },
        {
          id: 4,
          name: "Introduction",
          discription: "An introction to the course",
          links: [
            { id: 1, link: "link1", duration: "9:10" },
            { id: 2, link: "link2", duration: "9:10" }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <p style={{ paddingBottom: "1em" }}>HOW YOU WILL LEARN</p>
            <h3>Your roadmap from Zero to Radio Ready music</h3>
            <p>
              43 High Definition videos at your convenience. Each video is 5 to
              15 minutes length, with 8 hours of total content
            </p>
          </div>
        </div>

        <div className="row">
          {this.state.modules.map(module => (
            <div className="col-md-6">
              <Module key={module.id} module={module} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default VideoModule;
