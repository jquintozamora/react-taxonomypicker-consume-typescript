import * as React from "react";
import TaxonomyPicker from "react-taxonomypicker";
// Be sure to include styles at some point
import "react-taxonomypicker/dist/React.TaxonomyPicker.css";

export default class App extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="app-container">
                <TaxonomyPicker
                    name="Language"
                    displayName="Language"
                    termSetGuid="26ebf149-101a-4996-9df2-8179a537350d"
                    termSetName="Language"
                    multi={true}
                />
            </div>
        );
    }
}
