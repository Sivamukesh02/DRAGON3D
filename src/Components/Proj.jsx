import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import '../assets/Style/style.css';

function Dragon() {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}dragon.glb`);
  return <primitive object={scene} scale={1} />;
}

function Proj() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill both Email and Password!");
      return;
    }
    alert("Successfully Registered! 🎉");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="viewer-container">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Dragon />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={0.8} />
      </Canvas>

      <div className="card-container">
        <div className="card-content">
          <h1>Register Now</h1>
          <div className="form">
            <label>Email</label>
            <input
              type="email"
              className="input1"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> 
            <label>Password</label>
            <input
              type="password"
              className="input1"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn">
              <button type="button" className="btn-primary" onClick={handleSignup}>
                Signup Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proj;