import React from 'react';
import { connect } from 'react-redux';

// Acciones
import { getPosts } from './actions/posts';

// Componentes
import Album from './album';

class Albums extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderArticles() {
    const { isLoading, error, posts } = this.props;

    if (isLoading) {
      return <p>Cargando...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <Album posts={posts}/>
    }
  }

  render() {
    return <>
      <p>Albums:</p>
      { this.renderArticles() }
    </>
  }
}

const mapStateToProps = ({ posts }) => ({
  ...posts
});


const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
