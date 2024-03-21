import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name={"황호연"} comment={"안녕하세요, 황호연입니다."}/>
            <Comment name={"고대영"} comment={"안녕하세요, 고대영입니다."}/>
        </div>
    );
}
export default CommentList;