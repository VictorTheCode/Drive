"use client";

export default function Home() {
  return (
    <div className="bg-amber-200">
      <div className="navbar flex py-5 px-9 items-center justify-between">
        <h1 className="font-bold text-2xl">Hydra</h1>
        <div className="flex items-center gap-5">
          <p>Register</p>
          <p>Docs</p>
        </div>
      </div>
      <div className="flex-center h-screen">
        <h1 className="font-bold text-2xl">Hello, welcome to Hydra.</h1>
      </div>
    </div>
  );
}
