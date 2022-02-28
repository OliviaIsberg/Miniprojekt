import React, { ReactNode, ErrorInfo } from "react";

interface State {
    caughtError: boolean
}

interface Props{
    children: ReactNode
}

class ErrorBoundary extends React.Component<Props, State>{
    public state: State ={
        caughtError: false
    }

    public static getDerivedStateFromError(_:Error): State{
        return {caughtError:true}
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo){
        console.error("Uncaught error", error, errorInfo)
    }

    public render() {
        if (this.state.caughtError){
            return <h2>An unexpected error occured.</h2>
        }

        return this.props.children
    }
}

export default ErrorBoundary