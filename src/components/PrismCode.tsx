import * as React from "react";

declare const Prism: any;

interface PrismCodeProps {
    async?: boolean;
    className?: string;
}

export default class PrismCode extends React.Component<PrismCodeProps, {}> {
    codeNode: HTMLElement;
    componentDidMount() {
        this._hightlight();
    }

    componentDidUpdate() {
        this._hightlight();
    }

    _hightlight() {
        Prism.highlightElement(this.codeNode, this.props.async);
    }

    render() {
        return (
            <pre ref={ (ref) => { this.codeNode = ref; } } className={this.props.className}>
                {this.props.children}
            </pre>
        );
    }
}
