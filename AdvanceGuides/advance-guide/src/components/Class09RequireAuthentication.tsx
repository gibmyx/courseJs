import React from "react";

function Class09RequireAuthentication(Component: React.ComponentType) {
    return class AuthenticatedComponent extends React.Component<{ Authenticated: boolean }, any> {

        constructor(props: { Authenticated: boolean }) {
            super(props);
            this.state = {
                Authenticated: '',
            };
        }

        render() {
            const loginErrorMessage = (
                <div>
                    Please <button onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()

                    this.setState((preState: any) => ({
                        Authenticated: !preState.Authenticated
                    }))
                }}>login</button>
                    in order to view this part of the application.
                </div>
            );

            return (
                <div>
                    {this.state.Authenticated ? <Component {...this.props} /> : loginErrorMessage}
                </div>
            );
        }
    };
}

export {Class09RequireAuthentication}