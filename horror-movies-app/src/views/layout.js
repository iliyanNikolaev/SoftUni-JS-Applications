import {html} from '../../node_modules/lit-html/lit-html.js'

// TODO Replace with actual navigation

export const layoutTemplate = (userData, content) => html`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Horror Movies</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        ${userData ? html`
        <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
        </li>` : html`
        <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/register">Register</a>
        </li>
        `}
    </div>
  </div>
</nav>
<main>
${html`${content}`}
</main>`;

