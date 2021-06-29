import { Component } from 'react';
import './NewArticleForm.scss';
import PropTypes from 'prop-types';

export class NewArticleForm extends Component {

  static propTypes = {
    onArticleCreate: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      author: '',
      description: '',
      title: '',
    };
  }

  componentDidMount() {
    console.log('component was created');
  }

  componentWillUnmount() {
    console.log('component will be destroyed');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component was updated')
  }


  addArticleHandler = (event) => {
    event.preventDefault();
    this.props.onArticleCreate({
      author: this.state.author,
      title: this.state.title,
      description: this.state.description,
    });

    this.setState({
      author: '',
      description: '',
      title: '',
    });
  }

  authorInputHandler = (event) => {
    this.setState({
      author: event.target.value,
    });
  }

  titleInputHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  descriptionInputHandler = (event) => {
    this.setState({
      description: event.target.value,
    });
  }

  onFormClose = () => {
    this.props.onFormClose();
  }

  render() {
    return (
      <form onSubmit={this.addArticleHandler} className="add-new-article">
        <input
          type="text"
          placeholder="Author"
          onChange={this.authorInputHandler}
          value={this.state.author}
        />
        <input
          type="text"
          placeholder="Title"
          onChange={this.titleInputHandler}
          value={this.state.title}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          onChange={this.descriptionInputHandler}
          value={this.state.description}
        >

      </textarea>
        <div className="add-new-article__buttons">
          <button type="button" onClick={this.onFormClose}>Close form</button>
          <button type="submit">Create article</button>
        </div>
      </form>
    )
  }
}