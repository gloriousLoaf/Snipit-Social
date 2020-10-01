//// POST - Individual post cards ////
import React, { Component } from "react";

import { connect } from "react-redux";

import { deletePosts, yourPosts } from "../../actions/postActions/postActions";

// import DeleteButton from "../../components/posts/DeleteButton";

import { Link } from "react-router-dom";

// import { Button } from "react-bootstrap";
// unlinked for now, so much conflicting css that its hard to know where to style
// import "./style.css";

class Post extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.deletePosts(id);
  }

  render() {
    // const { classes, post, list, auth, user, yourPost } = this.props;
    const { post, list, user } = this.props;

    // console.log(auth.user._id);
    // console.log(list);
    // console.log(user)

    // doesnt work unless this is here...
    // let i = 0;

    // let deleteButtonTest;

    // for (i = 0; i < list.length; i++) {
    //   console.log(i)
    //   if (auth.user._id == list[i].user.id) {
    //     // console.log(auth.user._id)
    //     // console.log(list[i].user.id)"
    //     deleteButtonTest = (
    //       <div>
    //         <DeleteButton
    //           className="deleteBtn my-1"
    //           onClick={() => this.handleDelete(post._id)}
    //         >
    //           <i className="uil-trash"></i>
    //         </DeleteButton>
    //       </div>
    //     );
    //   } else {
    //     deleteButtonTest = ( 
    //       <div>
    //         hello
    //       </div>
    //     ) 
    //   }
    // }

    // filter for list.user.id, compare against auth.user._id
    list.filter(i => {
      // console.log(i)
      if (i.user.id === user._id) {
        // this hits, matches my one post with my id
        // console.log("match");
        // console.log(typeof i.user.id);
        // console.log(typeof auth.user._id);
        // console.log(i.user.id);
        // console.log(auth.user._id);
        // but it does not render the button
        this.props.yourPosts();
        // deleteButtonTest = (
        //   <div>
        //     <DeleteButton
        //       className="deleteBtn my-1"
        //       onClick={() => this.handleDelete(post._id)}
        //     >
        //       <i className="uil-trash"></i>
        //     </DeleteButton>
        //   </div>
        // );
      };
    })


    return (
      <div
        className="card container my-3 d-flex justify-content-center"
        id="border"
      >
        <hr></hr>
        <Link
          style={{ maxWidth: "max-content" }}
          to={`/ProfileSwitcher/${post.user.id}`}
        >
          <h3 className="pl-3">{post.user.fullname}</h3>
        </Link>
        <div className="card-title">
          <div className="card-body ">
            <h6 className="card-text textChanger">{post.text}</h6>
          </div>
          <span className="pt-3" id="date">
            {" "}
            {new Date(post.createdAt).toLocaleString()}{" "}
          </span>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.post.list,
  loading: state.post.loading,
  auth: state.auth,
  user: state.auth.user,
  yourPost: state.post.yourPost

});

export default connect(mapStateToProps, { deletePosts, yourPosts })(Post);
