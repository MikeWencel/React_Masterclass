import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
            author="Sam" 
            timeAgo = "Today at 4:45" 
            comment="React is really nice"
            avatar={faker.image.avatar()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
            author="Jess" 
            timeAgo = "Today at 6:45" 
            comment="Props system are good"
            avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Mike" 
            timeAgo = "Today at 10:45" 
            comment="I should learn this!"
            avatar={faker.image.avatar()}
            />
            </ApprovalCard>
           
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))

