import { useForm } from "antd/es/form/Form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let userData = [
    {
      email: "yashrana@gmail.com",
      password: "82008200",
    },
    { email: "meetmistry@gmail.com", password: "84008400" },
    { email: "niharpatel@gmail.com", password: "900900" },
    { email: "dharminpatel@gmail.com", password: "123123" },
    {
      email: "pratikjani@gmail.com",
      password: "999666",
    },
    {
      email: "hemaxipatel@gmail.com",
      password: "456456",
    },
  ];

  const addData = (data) => {
    let matchUser = userData.find((e) => {
      return e.email === data.email && e.password === data.password;
    });
    if (matchUser) {
      localStorage.setItem("user", JSON.stringify(matchUser));
    } else {
      alert("404 Error User NOt Found");
    }
  };

  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(addData)}>
      <input
        {...register("email", { require: true })}
        className="bg-black text-white me-2"
      />
      {errors.email && <h1>Write Email First</h1>}

      <input
        {...register("password", { required: true })}
        className="bg-black text-white"
      />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
