import {Component} from "react";

function ListItem(props: any) {
    // Correcto! No hay necesidad de especificar la key aquí:
    return <li>{props.value}</li>;
}

function NumberList(props: any) {
    const numbers = props.numbers;
    const listItems = numbers.map((number: number) =>
        // Correcto! La key debería ser especificada dentro del array.
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>{listItems}</ul>
    );
}
function Blog(props: any) {
    const sidebar = (
        <ul>
            {props.posts.map((post: any) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post: any) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            {content}
        </div>
    );
}

class ListAndKeys extends Component<any, any>{

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        ];


        return(
            <div>
                <h1>Lista y Keys</h1>
                <NumberList numbers={numbers} />
                <Blog posts={posts} />
            </div>
        )
    }
}
export default ListAndKeys;