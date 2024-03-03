const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          {/* <input type="checkbox" className="checkbox border-slate-900" /> */}
          <input type="radio" name="radio-2" className="radio radio-primary" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          {/* <input type="checkbox" className="checkbox border-slate-900" /> */}
          <input type="radio" name="radio-2" className="radio radio-primary" />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
