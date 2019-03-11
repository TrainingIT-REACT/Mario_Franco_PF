import React from 'react';
import { connect } from 'react-redux';

// Acciones
import { getSongs } from './actions/songs';

// Componentes
import Song from './song';

class Songs extends React.Component {
  componentDidMount() {
    this.props.getSongs();
  }

  renderArticles() {
    const { isLoading, error, songs } = this.props;

    if (isLoading) {
      return <p>Cargando...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <Song songs={songs}/>
    }
  }
  render() {
    return <>
      <p>Canciones:</p>
      { this.renderArticles() }
    </>
  }
}

const mapStateToProps = ({ songs }) => ({
  ...songs
});


const mapDispatchToProps = (dispatch) => ({
  getSongs: () => dispatch(getSongs()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
