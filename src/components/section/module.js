import React, { Component } from "react";
import "./module.css";

class Module extends Component {
  render() {
    const { id, name, discription, links } = this.props.module;
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <p>
                Module {id}-{name} <br />
                <small style={{ color: "black" }}>{discription}</small>
              </p>
            </th>
          </tr>
        </thead>
        {links.map(link => (
          <tbody key={link.id}>
            <tr>
              <td>
                <a href="3">{link.link}</a>
                <span> -{link.duration} </span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}
export default Module;
