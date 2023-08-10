import React, { Component } from 'react';

// 하위 컴포넌트 정의
class SubComponent extends Component {
  render() {
    return <div>{this.props.value}</div>;
  }
}

// 상위 컴포넌트 정의
class ParentComponent extends Component {
  render() {
    const valueToSend = "하위 컴포넌트 전달 값";
    
    return (
      <div>
        <h1>상위 컴포넌트</h1>
        <SubComponent value={valueToSend} />
      </div>
    );
  }
}

export default ParentComponent;
