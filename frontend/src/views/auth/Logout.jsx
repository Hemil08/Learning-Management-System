import { useEffect } from "react";
import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";
import { logout } from "../../utils/auth";
import { Link } from "react-router-dom";
import Toast from "../plugin/Toast";

function Logout() {
  useEffect(() => {
    logout();
    Toast().fire({
        icon: "success",
        title: "Logout Successful",
      });
  }, []);

  return (
    <>
      <BaseHeader />

      <section
        className="container d-flex flex-column vh-100"
        style={{ marginTop: "150px" }}
      >
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            <div className="card shadow">
              <div className="card-body p-6">
                <div className="mb-4">
                  <h1 className="mb-1 fw-bold">You have been logged out</h1>
                  <span>
                    Thanks for visiting our website, come back anytime!
                  </span>
                </div>
                <form className="needs-validation mt-5" noValidate="">
                  <div className="d-grid d-flex">
                    <Link to={`/login/`} className="btn btn-primary me-2 w-100">
                      Login <i className="fas fa-sign-in-alt"></i>
                    </Link>
                    <Link to={`/login/`} className="btn btn-primary w-100">
                      Register <i className="fas fa-user-plus"></i>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default Logout;
