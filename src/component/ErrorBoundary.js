import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
           hasError: false,
        }
    }


    componentDidCatch(error,errorInfo){
        return {error, errorInfo};
    }


    static getDerivedStateFromError(error) {
        return {hasError: true };
        
    }
    render() {
        if (this.state.hasError) {
            return <h1>Ooops! Something went wrong</h1>
        }
        return this.props.children

    
    }
}

export default ErrorBoundary;