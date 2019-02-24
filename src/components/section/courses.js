import React, { Component } from "react";
import Course from "./course";
class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course1: [
        {
          id: 1,
          name: "Introduction",
          discription: "An introduction to Distributed Systems concepts",
          topics: [
            { id: 1, topic: "Introduction to Distributed Systems" },
            { id: 2, topic: " Cloud Computing" },
            { id: 3, topic: "Distributed Systems vs Monolith Systems" }
          ]
        },
        {
          id: 2,
          name: "Distributed Processing",
          discription:
            "Learn about distributed processing and the fundamental mechanism Map-Reduce",
          topics: [
            { id: 1, topic: "Introduction to Distribted Processing" },
            { id: 2, topic: "Map-Reduce" },
            { id: 3, topic: "Time in Distributed Systems" },
            { id: 4, topic: " Vector Clock" },
            { id: 5, topic: "Case Study - Instagram" },
            { id: 6, topic: "Hands On - Hadoop" }
          ]
        },
        {
          id: 3,
          name: "Distributed Data Storage",
          discription:
            "Learn fundamentals of distributed data storage and concepts like Eventual Consistency, Quorom",
          topics: [
            { id: 1, topic: "Introduction to Distributed Data Storage" },
            { id: 2, topic: "Eventual Consisteny" },
            { id: 3, topic: "Quorom" },
            { id: 4, topic: " Case study - Dynamo DB" },
            { id: 5, topic: "Hands On - Redis" }
          ]
        },
        {
          id: 4,
          name: "NoSQL Databases",
          discription:
            "Learn about NoSQL Databases concepts and various kids of noSQL databases",
          topics: [
            { id: 1, topic: "NoSQL Databases Introduction" },
            { id: 2, topic: "Key Value store" },
            { id: 3, topic: "Document Databases" },
            { id: 4, topic: "Column Databases " },
            { id: 5, topic: "Graph Databases" },
            { id: 6, topic: "Case Study - Document DB" },
            { id: 7, topic: "Hands On - Mongo DB" }
          ]
        },
        {
          id: 5,
          name: "Microservcies",
          discription:
            "Learn about Microservcies and SOA concepts, important of sync and async functions and API design",
          topics: [
            { id: 1, topic: "Microservcies Introduction" },
            { id: 2, topic: "Sync vs Async Systems" },
            { id: 3, topic: "API Design" },
            { id: 4, topic: "  Case study - Google File System" },
            { id: 5, topic: "Hands On - HDFS" }
          ]
        },
        {
          id: 6,
          name: "System Design & Project",
          discription:
            "Learn fundamentals of system design, and complete the course project to use all the conepts learnt during the course          ",
          topics: [
            { id: 1, topic: "System Design" },
            { id: 2, topic: "Course Project" },
            { id: 3, topic: "Discussion " },
            { id: 4, topic: " Course Completion Dinner!" }
          ]
        }
      ],
      course2: [
        {
          id: 1,
          name: "Introduction",
          discription: "An introduction to the masterclass and best practices.",
          topics: [
            { id: 1, topic: " Introduction to Distributed Systems" },
            { id: 2, topic: "Cloud Computing" },
            { id: 3, topic: "Comparison with non-distributed systems" }
          ]
        },
        {
          id: 2,
          name: " Distributed Processing",
          discription:
            "Learn about distrobuted processing, Map Reduce, and Hadoop",
          topics: [
            { id: 1, topic: "Introduction to Distributed Processing" },
            { id: 2, topic: "Map Reduce" },
            { id: 3, topic: "Time in Distributed Systems" },
            { id: 4, topic: "Vector Clock" },
            { id: 5, topic: "Case Study - Instagram" },
            { id: 6, topic: "Hands On - Hadoop" }
          ]
        },
        {
          id: 3,
          name: "Distributed Hashing & Queues",
          discription: "Learn about distributed hashing",
          topics: [
            { id: 1, topic: "Introduction to Distributed Hashing" },
            { id: 2, topic: "Consistent Hashing" },
            { id: 3, topic: "Distributed Queues" },
            { id: 4, topic: " Case study - SQS " },
            { id: 5, topic: "Hadsn On - Kafka" }
          ]
        },
        {
          id: 4,
          name: " Distributed Data Storage",
          discription:
            "Learn fundamentals of distributed data storage and concepts like Eventual Consistency, Quorom",
          topics: [
            { id: 1, topic: "Introduction to Distributed Data Storage" },
            { id: 2, topic: " Eventual Consisteny" },
            { id: 3, topic: "Quorom" },
            { id: 4, topic: " Case study - Dynamo DB " },
            { id: 5, topic: "Hands On - Redis" }
          ]
        },
        {
          id: 5,
          name: "NoSQL Databases",
          discription:
            "Learn about NoSQL Databases concepts and various kids of noSQL databases",
          topics: [
            { id: 1, topic: "NoSQL Databases Introduction" },
            { id: 2, topic: "Key Value store" },
            { id: 3, topic: "Document Databases" },
            { id: 4, topic: "Column Databases " },
            { id: 5, topic: "Graph Databases" },
            { id: 6, topic: "Case Study - Document DB" },
            { id: 7, topic: " Hands On - Mongo DB" }
          ]
        },
        {
          id: 6,
          name: "Concurrency and Replication Control",
          discription:
            "Learn about concurrency and replication control          ",
          topics: [
            { id: 1, topic: "Introduction to Concurrency Control" },
            { id: 2, topic: " Transactions & Serialization" },
            { id: 3, topic: "Pessimistic Concurrency" },
            { id: 4, topic: "Optimistic Concurrency " },
            { id: 5, topic: "Replication Control" },
            { id: 6, topic: "Two Phase Commit" }
          ]
        },
        {
          id: 7,
          name: "Stream Processing",
          discription: "Learn about stream processing",
          topics: [
            { id: 1, topic: "Introduction to Stream Processing" },
            { id: 2, topic: "Case study - Apache Storm" },
            { id: 3, topic: "Hands On - Apache Storm" }
          ]
        },
        {
          id: 8,
          name: " Microservcies",
          discription:
            "Learn about Microservcies and SOA concepts, important of sync and async functions and API design",
          topics: [
            { id: 1, topic: "Microservcies Introduction" },
            { id: 2, topic: "Sync vs Async Systems" },
            { id: 3, topic: "API Design" },
            { id: 4, topic: "Case study - Google File System " },
            { id: 5, topic: " Hands On - HDFS" }
          ]
        },
        {
          id: 9,
          name: "System Design & Project",
          discription:
            "Learn fundamentals of system design, and complete the course project to use all the conepts learnt during the course",
          topics: [
            { id: 1, topic: " System Design" },
            { id: 2, topic: " Course Project" },
            { id: 3, topic: "Discussion" },
            { id: 4, topic: " Course Completion Dinner!" }
          ]
        }
      ],
      course3: [
        {
          id: 1,
          name: "Introduction",
          discription: "An introduction to the masterclass and best practices.",
          topics: [
            { id: 1, topic: "Introduction to Distributed Systems" },
            { id: 2, topic: "Cloud Computing" },
            { id: 3, topic: "Comparison with non-distributed systems" }
          ]
        },
        {
          id: 2,
          name: "Distributed Processing",
          discription:
            "Learn about distrobuted processing, Map Reduce, and Hadoop",
          topics: [
            { id: 1, topic: "Introduction to Distributed Processing" },
            { id: 2, topic: " Map Reduce            " },
            { id: 3, topic: "Time in Distributed Systems" },
            { id: 4, topic: " Vector Clock" },
            { id: 5, topic: " Case Study - Instagram" },
            { id: 6, topic: "Hands On - Hadoop" }
          ]
        },
        {
          id: 3,
          name: "Distributed Hashing & Queues",
          discription: "Learn about distributed hashing          ",
          topics: [
            { id: 1, topic: "Introduction to Distributed Hashing" },
            { id: 2, topic: "Consistent Hashing" },
            { id: 3, topic: "Distributed Queues" },
            { id: 4, topic: "Case study - SQS " },
            { id: 5, topic: "Hadsn On - Kafka" }
          ]
        },
        {
          id: 4,
          name: "Distributed Consensus",
          discription: "Learn about distributed consensus",
          topics: [
            { id: 1, topic: "Consensus in Distributed Systems" },
            { id: 2, topic: "Paxos" },
            { id: 3, topic: "Raft" },
            { id: 4, topic: "Case study - Zookeeper " },
            { id: 5, topic: "Hands On - Zookeeper" }
          ]
        },
        {
          id: 5,
          name: "Distributed Locking",
          discription:
            "Learn about the do's and don'ts when buying or using beats from online producers",
          topics: [
            { id: 1, topic: " Locking in Distributed Systems" },
            { id: 2, topic: " Case study - Chubby" },
            { id: 3, topic: "Hands On - Chubby" }
          ]
        },
        {
          id: 6,
          name: "Distributed Data Storage",
          discription:
            "Learn fundamentals of distributed data storage and concepts like Eventual Consistency, Quorom",
          topics: [
            { id: 1, topic: "Introduction to Distributed Data Storage" },
            { id: 2, topic: "Eventual Consisteny" },
            { id: 3, topic: "Quorom" },
            { id: 4, topic: "Case study - Dynamo DB" },
            { id: 5, topic: " Hands On - Redis" }
          ]
        },
        {
          id: 7,
          name: "NoSQL Databases",
          discription:
            "Learn about NoSQL Databases concepts and various kids of noSQL databases",
          topics: [
            { id: 1, topic: "NoSQL Databases Introduction" },
            { id: 2, topic: "Key Value store" },
            { id: 3, topic: "Document Databases " },
            { id: 4, topic: "Column Databases " },
            { id: 5, topic: "Graph Databases " },
            { id: 6, topic: "Case Study - Document DB" },
            { id: 7, topic: " Hands On - Mongo DB" }
          ]
        },
        {
          id: 8,
          name: "Distributed Ledgers",
          discription: "Learn about Blockchain",
          topics: [
            { id: 1, topic: "Introduction to Distributed Ledgers" },
            { id: 2, topic: "Digital Currency" },
            { id: 3, topic: "Case study - Blockchain" },
            { id: 4, topic: " Case study - Bitcoin" },
            { id: 5, topic: "Hands On - Blockchain" }
          ]
        },
        {
          id: 9,
          name: "Concurrency and Replication Control",
          discription: "Learn about concurrency and replication control",
          topics: [
            { id: 1, topic: " Introduction to Concurrency Control" },
            { id: 2, topic: "Transactions & Serialization" },
            { id: 3, topic: "Pessimistic Concurrency" },
            { id: 4, topic: " Optimistic Concurrency" },
            { id: 5, topic: "Replication Control" },
            { id: 6, topic: " Two Phase Commit" }
          ]
        },
        {
          id: 10,
          name: "Stream Processing",
          discription: "Learn about stream processing",
          topics: [
            { id: 1, topic: " Introduction to Stream Processing" },
            { id: 2, topic: "Case study - Apache Storm" },
            { id: 3, topic: "Hands On - Apache Storm" }
          ]
        },
        {
          id: 11,
          name: "Microservcies",
          discription:
            "Learn about Microservcies and SOA concepts, important of sync and async functions and API design          ",
          topics: [
            { id: 1, topic: "Microservcies Introduction" },
            { id: 2, topic: "Sync vs Async Systems" },
            { id: 3, topic: " API Design" },
            { id: 4, topic: "Case study - Google File System" },
            { id: 5, topic: "Hands On - HDFS" }
          ]
        },
        {
          id: 12,
          name: "System Design & Project",
          discription:
            "Learn fundamentals of system design, and complete the course project to use all the conepts learnt during the course",
          topics: [
            { id: 1, topic: "System Design" },
            { id: 2, topic: "Course Project" },
            { id: 3, topic: "Discussion" },
            { id: 4, topic: "Course Completion Dinner! " }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <section style={{ marginTop: "30px" }}>
        <div className="row m-1">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <h3>Distributed Systems - Introductory Course</h3>
            <p>WHAT WILL YOU LEARN</p>
          </div>
        </div>
        <div className="row">
          {this.state.course1.map(c => (
            <div className="col-md-4">
              <Course key={c.id} courseName="course1" course={c} />
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <h3>Distributed Systems - Intermediate Course</h3>
            <p>WHAT WILL YOU LEARN</p>
          </div>
        </div>
        <div className="row">
          {this.state.course2.map(c => (
            <div className="col-md-4">
              <Course key={c.id} courseName="course2" course={c} />
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <h3>Distributed Systems - Advanced Course</h3>
            <p>WHAT WILL YOU LEARN</p>
          </div>
        </div>
        <div className="row">
          {this.state.course3.map(c => (
            <div className="col-md-4">
              <Course key={c.id} courseName="course1" course={c} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Courses;
