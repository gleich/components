import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Alex"
        comment="Super cool post!"
        time="Today at 2:00AM"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Sam"
        comment="Wow, super interesting"
        time="Today at 8:00PM"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        comment="This blog sucks!"
        time="Yesterday at 4:00PM"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
