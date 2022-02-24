import React from "react";

export function hocLogger(Component: React.ComponentType) {
    return class extends React.Component<any, any> {
        componentDidMount() {
            console.log('Hey, we are mounted!');
        }
        render() {
            return <Component {...this.props} />;
        }
    }
}
