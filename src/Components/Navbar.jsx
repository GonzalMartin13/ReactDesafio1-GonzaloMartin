import React from "react";

const Navbar = () => {
    let logo = "./reacthouse.png.png";
    return (
        <div class="navbar bg-secondary justify-content-center">
            <div class="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={logo} alt="Rhouse" width="30" height="24" class="m-2 align-text-top" />
                <div class="container-fluid">
                    <a href="../public/index.html" class="navbar-brand">ReactHouse</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="../public/index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cursos
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li class="dropdown-item">FrontEnd</li>
                                    <li class="dropdown-item">BackEnd</li>
                                    <li class="dropdown-item">CiberSeguridad</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;