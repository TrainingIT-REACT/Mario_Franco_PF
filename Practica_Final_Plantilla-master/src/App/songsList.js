import React from "react";
import { Provider } from "react-redux";

// Store
import store from './store';

// Componentes
import Songs from './songs';

class SongList extends React.Component {
    render() {
        return (
            <div>
                 <Provider store={store}>
                    <Songs />
                </Provider>
            </div>
        );
    }
}

export default SongList;
