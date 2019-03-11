import React from "react";
import { Provider } from "react-redux";

// Store
import store from './store';

// Componentes
import Albums from './albums';

class AlbumList extends React.Component {
    render() {
        return (
            <div>
                 <Provider store={store}>
                    <Albums />
                </Provider>
            </div>
        );
    }
}

export default AlbumList;
