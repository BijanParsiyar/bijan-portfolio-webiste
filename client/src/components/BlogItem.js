import React, { Component } from "react";
import { connect } from "react-redux";

import { getPost } from "../actions/postActions";

class BlogItem extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  render() {
    const { post } = this.props.post;
    console.log(post);
    return (
      <div className="landing-blog-item">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center post-header">{post.title}</h2>
              <hr />

              <p className="post-text">{post.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(BlogItem);
