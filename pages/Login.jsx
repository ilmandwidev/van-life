import React from "react";
import {
  useNavigation,
  useLoaderData,
  useActionData,
  redirect,
  Form,
} from "react-router-dom";
import { loginUser } from "../utility/api";
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    // Setup redirect
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (err) {
    // console.log(err);
    return err.message;
  }
}

export default function Login() {
  const errorMessage = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}

      {errorMessage && <h3 className="red">{errorMessage}</h3>}

      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
      <div
        className="about-page-cta"
        style={{ paddingBottom: "5pt", marginTop: "5pt" }}
      >
        <h3>
          <center>Akun Demo</center>
        </h3>
        <p>email : admin@gmail.com</p>
        <p>password : admin</p>
      </div>
    </div>
  );
}
