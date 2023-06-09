import {html} from 'https://unpkg.com/lit-html?module';

export const layoutTemplate = (user, content) => html`
<header>
        <nav>
            <a href="/">Home</a>
            <a href="/catalog">Catalog</a>
            <a href="/about">About</a>
            ${user 
                ? html`<a class="guest" href="/create">Create</a>
                       <a class="guest" href="/logout">Logout</a>
                       <p>Logged as ${user.email}</p>` 
                : html`<a class="guest" href="/login">Login</a>
                       <a class="guest" href="/register">Register</a>`}
        </nav>
        <main>
        ${content}
        </main>
</header>`;