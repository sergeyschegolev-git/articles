import './NewArticleForm.scss';

export const NewArticleForm = () => {
  return (
    <form className="add-new-article">
      <input
        type="text"
        placeholder="Author"
      />
      <input
        type="text"
        placeholder="Title"
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
      >

      </textarea>
      <div className="add-new-article__buttons">
        <button type="button">Close form</button>
        <button type="submit">Create article</button>
      </div>
    </form>
  )
}