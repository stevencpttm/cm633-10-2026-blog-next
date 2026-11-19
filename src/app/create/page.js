export default function () {
  return (
    <div className="p-4">
      <h2 className="text-3xl border-b border-slate-300 pb-4 mb-4">
        Create Post
      </h2>
      <form>
        <label className="block border-b border-slate-200 pb-4 mb-4">
          <strong>Title</strong>
          <input
            type="text"
            name="title"
            className="w-full p-2 bg-slate-200 rounded"
          />
        </label>
        <label className="block border-b border-slate-200 pb-4 mb-4">
          <strong>Content</strong>
          <textarea
            type="text"
            name="content"
            className="w-full p-2 bg-slate-200 rounded min-h-32"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-slate-600 text-white rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}
