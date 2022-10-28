import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div className="loader">
          <div></div>
          <div></div>
          <p>Welcome!</p>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
// import this component into the
// root compnent which is app.js.
// next step is to nest it inside
// the root component just inside the content div

// const [name, setName] = useState('mario');
// const [age, setAge] = useState(34)

// const handleClick = () => {
//   setName('luigi');
//   setAge('27')

// <div className="home">
//   <h2>Home Page</h2>
//   <p>{name} is {age} years old</p>
//   <button onClick={handleClick}>Click Me</button>
// </div>

//     on props: add data in the parent component and pass it down as
//     a with keyword prop to the child component

// apparently with arrow function component,
// it's possible you don't use the keyword prop
// {/* <BlogList
//         blogs={blogs.filter((blog) => blog.author === "mario")}
//         title="Mario's blog"
//       />

//       <BlogList
//         blogs={blogs.filter((blog) => blog.author === "yoshi")}
//         title="Yoshi's blog"
//       /> */}

//useeffect is a function that runs every time there is a re-render
//an empty dependency array make sure that the useEffect hook only runs the function after
//the first initial render, thereafter if the state changes, it won't run the function again
