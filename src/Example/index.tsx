import ReactDOM from "react-dom";
import React from "react";
import Button from '@mui/material/Button';

const OptionsContext = React.createContext<any>(null);

export default function createExternalRoot(container: HTMLElement) {
    return {
        render(context: any) {
            ReactDOM.render(
                <OptionsContext.Provider value={context.options}>
                    <OptionsContext.Consumer>
                        {(options) => {

                            return exampleView(options);
                        }
                    }
                    </OptionsContext.Consumer>
                </OptionsContext.Provider>,
                container
            );
        },
        unmount() {
            ReactDOM.unmountComponentAtNode(container);
        }
    }
}

function exampleView(options:any) {
    return (
        <>
            <div>
                <p>
                    EntityID: {options.entityId}
                </p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <span className="panel-header-controls">
                    <Button variant="contained" onClick={() => { console.log('Clicked: '+ Date.now()); }}>
                        Refresh
                    </Button>
                </span>
            </div>
        </>
    )
}
