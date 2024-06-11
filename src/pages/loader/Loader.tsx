import style from "./loader.module.css";
const Loader = () => {
  return (
    <div className="flex items-center !w-[100%] !max-w-[100%] bg-bgColor absolute z-50 top-0 justify-center h-screen">
      <span className={style.crossLoader} />
    </div>
  );
};

export default Loader;
