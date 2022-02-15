const InputCustom = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={props.id} className="text-blue text-lg">
        {props.label}
      </label>

      {props.failure ? (
        <input
          placeholder={props.placeholder}
          id={props.id}
          type={props.type}
          name={props.name}
          maxlength={props.maxLength}
          className="px-6 py-2 w-full border-solid border-2 border-red transition duration-300"
          onChange={props.onChange}
          value={props.value}
          required
        />
      ) : (
        <input
          placeholder={props.placeholder}
          id={props.id}
          type={props.type}
          maxlength={props.maxLength}
          name={props.name}
          className="px-6 py-2 w-full border-solid border-2 border-gray transition duration-300"
          onChange={props.onChange}
          value={props.value}
          required
        />
      )}
    </div>
  );
};

export default InputCustom;
