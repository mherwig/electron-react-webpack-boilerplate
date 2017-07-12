import React from 'react'

export default class App extends React.Component {
    render() {
        const helloWorld = Renderer.helloWorld()

        return (
            <div>
                "{ helloWorld }" from electron's render process
            </div>
        )
    }
}