export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen text-black bg-white">
      <div className="p-6 shadow rounded w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input placeholder="Email" className="w-full border p-2 mb-3" />
        <input placeholder="Password" type="password" className="w-full border p-2 mb-3" />

        <button className="w-full bg-green-500 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}