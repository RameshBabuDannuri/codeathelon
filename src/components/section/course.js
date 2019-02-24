import React, { Component } from "react";

class Course extends Component {
  render() {
    const { id, name, discription, topics } = this.props.course;
    return (
      <section>
        <div
          className="card mb-3"
          key={id}
          style={{
            height: "380px",
            border: "none",
            boxShadow: "0px 2px 4px 0px"
          }}
        >
          <div className="card-body ">
            <p className="card-text">
              <h5 style={{ color: "blue" }}>
                Module-{id} {name}
              </h5>
              <p>{discription}</p>

              <ul className="list-unstyled">
                {topics.map(topic => (
                  <li>
                    <i
                      class="far fa-arrow-alt-circle-right mr-2 fa-1x"
                      style={{ color: "blue" }}
                    />

                    {topic.topic}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Course;
