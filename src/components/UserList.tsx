import useGetUsers from "../hooks/useGetUsers";

const UserList = () => {
  const { data, isError } = useGetUsers();

  if (isError) return <div>Somthing went Wrong</div>;
  return (
    <div className="flex flex-wrap gap-3">
      {data?.map((user) => (
        <div className="flex gap-2" key={user.id}>
            <p className=" font-semibold">{user.id}</p>
         <div> <p >username: {user.username}</p>
          <p className=" ">Password: {user.password}</p></div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
