import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default class PostItem extends Component {
  render() {
    const { post } = this.props;
    console.log(post);
    return (
      <div class="card">
        <div class="card-body">
          <Link to={`/post/${post._id}`}>
            <h3>{post.title}</h3>
          </Link>
          <Moment format="YYYY/MM/DD">{post.date}</Moment>
        </div>
      </div>
    );
  }
}
